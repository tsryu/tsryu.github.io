import { ArticleTitle } from './ArticleTitle';
import { SectionType } from './type/app';
import { useEffect, useState } from 'react';

interface SectionProps {
  section: SectionType;
  updateHeight: () => void;
}

const INITIAL_DISPLAY_COUNT = 10;

export function Section({ section, updateHeight }: SectionProps) {
  const { isRanking, noEllipsis, name, data, showThumbnail } = section;
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const displayedArticles = showAll
    ? data
    : data.slice(0, INITIAL_DISPLAY_COUNT);
  const showToggleButton = data.length > INITIAL_DISPLAY_COUNT;

  useEffect(() => {
    updateHeight();
  }, [showAll, updateHeight]);

  return (
    <section className={`column ${name}`}>
      <div className="head">
        <div className="headline">
          <span className="text">{name}</span>
        </div>
      </div>
      {displayedArticles.map(({ title, link, imageUrl }, i) =>
        link ? (
          <a
            href={link}
            rel="noreferrer"
            key={title + i}
            className="article"
            target="_blank"
            title={title}
          >
            <ArticleTitle
              order={i + 1}
              showThumbnail={showThumbnail}
              isRanking={isRanking}
              noEllipsis={noEllipsis}
              title={title}
              imageUrl={imageUrl}
            />
          </a>
        ) : (
          <span key={title} className="article" title={title}>
            <ArticleTitle
              order={i + 1}
              isRanking={isRanking}
              noEllipsis={noEllipsis}
              title={title}
              imageUrl={imageUrl}
            />
          </span>
        ),
      )}
      {showToggleButton && (
        <button className="toggle-button" onClick={handleToggle}>
          {showAll ? '닫기' : '더보기'}
        </button>
      )}
    </section>
  );
}
