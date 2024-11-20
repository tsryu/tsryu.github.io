import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import rssData from './data/rssData.json';
import webContent from './data/webContent.json';
import apiContent from './data/apiData.json';
import buildTime from './data/buildTime.json';
import { mergeWith, reduce, compose, concat } from 'ramda';
import { SectionType, RSSNews } from './type/app';
import { Section } from './Section';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useMemo, useRef, ReactElement } from 'react';
import usePullToRefresh from './hook/usePullToRefresh';
// import { Adsense } from '@ctrl/react-adsense';
// import { AD_CLIENT_ID, AD_SLOT_TOP_BANNER_ID } from './constants/setting';

type NewsEntry = [string, SectionType[]];

const CATEGORY_ORDER = ['news', 'social', 'culture', 'sports', 'game', 'hobby'];
const currentYear = new Date().getFullYear();

function getFormattedDate(): string {
  const koreanLocale = 'ko-KR';
  const today = new Date();
  const formattedDate = today.toLocaleDateString(koreanLocale);
  return formattedDate;
}

function sortSections(arr: NewsEntry[]): NewsEntry[] {
  return arr.map(([category, sections]) => {
    const sortedSections = sections.sort((a, b) => {
      return (a.priority || Infinity) - (b.priority || Infinity);
    });
    return [category, sortedSections];
  });
}
function sortCategories(arr: NewsEntry[]): NewsEntry[] {
  function getCategoryPriority(category: string): number {
    if (category === 'etc') {
      return Infinity; // 'etc'를 항상 마지막으로 배치하기 위해 가장 높은 값으로 설정
    }
    let index = CATEGORY_ORDER.indexOf(category);
    return index === -1 ? CATEGORY_ORDER.length : index;
  }

  return arr.sort((a, b) => {
    let priorityA = getCategoryPriority(a[0]);
    let priorityB = getCategoryPriority(b[0]);
    return priorityA - priorityB;
  });
}

function sortData(arr: NewsEntry[]): NewsEntry[] {
  return compose(sortCategories, sortSections)(arr);
}

// 두 객체를 병합하고 배열을 concat하는 함수
const mergeObjectsWithArrayConcat = (obj1: RSSNews, obj2: RSSNews) => {
  return mergeWith(concat, obj1, obj2);
};

// 여러 객체를 병합하는 함수
const mergeMultipleObjectsWithArrayConcat = (objects: RSSNews[]) => {
  return reduce(mergeObjectsWithArrayConcat, {}, objects);
};

function App(): ReactElement {
  usePullToRefresh();
  const refSwiper = useRef<SwiperRef>(null);

  const newsEntries = useMemo<NewsEntry[]>(() => {
    const mergedObj = mergeMultipleObjectsWithArrayConcat([
      rssData,
      webContent,
      apiContent,
    ]) as RSSNews;
    return sortData(Object.entries(mergedObj));
  }, []);

  const updateTime = `Updated on ${buildTime?.buildTime}`;

  const updateHeight = (): void => {
    refSwiper.current?.swiper.updateAutoHeight();
  };

  return (
    <div>
      <div className="head">
        <header>
          <h1 className="title">
            <a href="/tominews/">TOMINEWS</a>
          </h1>
        </header>
        <div className="subhead">{updateTime || getFormattedDate()}</div>
      </div>
      {/* <Adsense client={AD_CLIENT_ID} slot={AD_SLOT_TOP_BANNER_ID} /> */}
      {newsEntries && newsEntries.length > 0 ? (
        <Swiper
          ref={refSwiper}
          autoHeight={true}
          navigation={true}
          modules={[Navigation]}
          loop={true}
        >
          {newsEntries?.map(([category, source]) => (
            <SwiperSlide key={category}>
              <h2 className={`category-title ${category}`}>{category}</h2>
              <div className="grid-container">
                {Object.values(source)?.map(section => (
                  <Section
                    key={section.name}
                    section={section}
                    updateHeight={updateHeight}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div>No news for today</div>
      )}
      <footer className="footer">
        <div className="copyright">ⓒ {currentYear} Plainbear.</div>
        <div className="request">
          링크 삭제 요청은{' '}
          <a href="mailto:plainbear.adm@gmail.com">plainbear.adm@gmail.com</a>로
          부탁드립니다.
        </div>
      </footer>
    </div>
  );
}

export default App;
