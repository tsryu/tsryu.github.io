import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="홈" keywords={[`tsryu`, `류태석`, `프론트엔드 개발자`]} />
    <section className="section">
      <h2 className="section-title">Career<span className="comma">,</span></h2>
      <ul className="list-career">
        <li className="item">
          <h3 className="item-title"><a href="https://trazy.com" target="_blank" rel="noopener noreferrer">트레이지</a></h3>
          <p className="item-excerpt">웹 디자이너 / 2012.02 ~ 2014.01</p>
        </li>
        <li className="item">
          <h3 className="item-title"><a href="https://slowalk.co.kr" target="_blank" rel="noopener noreferrer">슬로워크</a></h3>
          <p className="item-excerpt">프론트엔드 개발자 / 2014.02 ~ 2019.03</p>
        </li>
        <li className="item">
          <h3 className="item-title"><a href="https://trazy.com" target="_blank" rel="noopener noreferrer">트레이지</a></h3>
          <p className="item-excerpt">프론트엔드 개발자 / 2019.07 ~</p>
        </li>
      </ul>
    </section>
    <section className="section">
      <h2 className="section-title">Spec<span className="comma">,</span></h2>
      <p>HTML, CSS, LESS, SCSS, styled-components, JavaScript, TypeScript, Next.js, React.js, Redux, jQuery, ES6, Vue.js, Vuex, d3.js, Wordpress, git, grunt, gulp, bower</p>
    </section>
    <section className="section">
      <h2 className="section-title">Portfolio<span className="comma">,</span></h2>
      <ul className="list-portfolio">
        <li className="item">
          <h3 className="item-title"><a href="https://trazy.com" target="_blank" rel="noopener noreferrer">Trazy</a></h3>
          <p className="item-excerpt">팀장, 프론트엔드 개발 / 스타일 및 카트, 결제 프로세스 개발 / Next.js, Redux, Immutable.js, TypeScript, styled-components</p>
        </li>
        <li className="item">
          <h3 className="item-title"><a href="http://graphicmag.co.kr/" target="_blank" rel="noopener noreferrer">propaganda</a></h3>
          <p className="item-excerpt">프론트엔드 개발, 워드프레스 개발 / vue.js + 워드프레스 테마 개발 / vue.js, wordpress, PostCSS</p>
        </li>
        <li className="item">
          <h3 className="item-title"><a href="https://master.d3nlc0uyexnhon.amplifyapp.com" target="_blank" rel="noopener noreferrer">대한민국 뉴스 소비 지도</a></h3>
          <p className="item-excerpt">전체 개발 / 데이터 시각화 및 지도 개발 / react.js, d3.js, openstreet map, scss</p>
        </li>
        <li className="item">
          <h3 className="item-title"><a href="https://www.socar.kr/" target="_blank" rel="noopener noreferrer">쏘카</a></h3>
          <p className="item-excerpt">PL, 프론트엔드 개발 / 회원관련 페이지 데이터 통신 및 상태관리 개발 / vue.js, vuex</p>
        </li>
        <li className="item">
          <h3 className="item-title"><a href="https://play.google.com/store/apps/details?id=com.tourlive" target="_blank" rel="noopener noreferrer">투어라이브</a></h3>
          <p className="item-excerpt">앱 프론트엔드 개발, PM 대리 / native base 커스터마이즈 개발 / react native, native base</p>
        </li>
        <li className="item">
          <h3 className="item-title"><a href="https://www.neosherlock.com/" target="_blank" rel="noopener noreferrer">셜록프레스</a></h3>
          <p className="item-excerpt">PM, 퍼블리싱, 워드프레스 개발  / 후원신청폼 개발 / wordpress, less</p>
        </li>
        <li className="item">
          <h3 className="item-title"><a href="http://www.beautifulstore.org/" target="_blank" rel="noopener noreferrer">아름다운가게 통합사이트</a></h3>
          <p className="item-excerpt">퍼블리싱, 워드프레스 개발 / 워드프레스 멀티사이트 개발, 기증신청폼 유효성검사 및 인터랙션 개발 / wordpress</p>
        </li>
        <li className="item">
          <h3 className="item-title"><a href="https://purme.org/" target="_blank" rel="noopener noreferrer">푸르메재단</a></h3>
          <p className="item-excerpt">퍼블리싱, 워드프레스 개발 / 주요 아카이브 개발, 접근성 대응 / wordpress, less</p>
        </li>
        <li className="item">
          <h3 className="item-title"><a href="https://maru180.com/" target="_blank" rel="noopener noreferrer">마루180</a></h3>
          <p className="item-excerpt">전체 개발 / 회원 이벤트 캘린더 개발, 미팅룸 캘린더 개발 / wordpress, less</p>
        </li>
        <li className="item">
          <h3 className="item-title"><a href="https://www.baconbox.co/" target="_blank" rel="noopener noreferrer">베이컨박스</a></h3>
          <p className="item-excerpt">프론트엔드 개발 / 구독 페이지 단계별 인터랙션 개발 / wordpress, woocommerce, less</p>
        </li>
        <li className="item">
          <h3 className="item-title"><a href="http://realmania.net/euro2016/" target="_blank" rel="noopener noreferrer">레알매니아 유로2016</a> &amp; <a href="http://realmania.net/awards/1516/" target="_blank" rel="noopener noreferrer">1516 시즌 어워드페이지</a></h3>
          <p className="item-excerpt">전체 개발, 디자인 / 축구 포메이션 반응형 개발, d3 + fullpage 연동 개발 / wordpress, d3.js, fullpage.js</p>
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
