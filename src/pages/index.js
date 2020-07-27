import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="홈" keywords={[`tsryu`, `류태석`, `프론트엔드 개발자`]} />
    <section className="section">
      <h2 className="section-title">
        About<span className="comma">,</span>
      </h2>
      <p>
        안녕하세요 <span role="img" aria-label="">🙇‍♂️</span>
        <br />
        Trazy 프론트엔드 개발자, 류태석이라고 합니다.
      </p>
      <h3 className="item-title">이래서 개발자가 됩니다 <span role="img" aria-label="">👨‍💻</span></h3>
      <p>
      커뮤니티 개발로 웹 개발을 시작했습니다. <br/>사용자들이 제가 만든 웹에서 소통하는 모습을 보면 재밌고 뿌듯함을 느낍니다. <br/>프론트엔드는 사용자의 피드백이 바로 일어나는 공간이라 더 선호합니다.
      </p>
      <h3 className="item-title">편안한 동료 <span role="img" aria-label="">✨</span></h3>
      <p>
      동료들에게 안정감을 주는 개발자가 싶습니다. <br/>프로젝트에서 책임감과 동료의식을 최우선의 가치로 생각합니다. <br/>나중에 "맞아! 태석님과 일했을 때 편하고 즐거웠지.."라고 기억되면 더할 나위 없겠네요.
      </p>
      <h3 className="item-title">웹 개발의 중재자 <span role="img" aria-label="">🥅</span></h3>
      <p>
        웹 개발 업계 표준 협업 가이드를 제시할 수 있는 사람이 되고 싶습니다. <br/>이것으로 직군 간의 갈등을 미약하게나마 해결하고 즐겁게 일할 수 있길 기대합니다. <br/>이 목표를 달성하기 위해 시행착오를 노션에 메모하며 주기적으로 <a href="https://tsryu.com" target="_blank" rel="noreferrer noopener">개발 블로그</a>를 발행합니다. 
      </p>
      <h3 className="item-title">이것도 좋아해요 <span role="img" aria-label="">⚽</span></h3>
      <p>
        유럽 축구, 기타 연주, 콘솔 게임에 관심을 가지고 있습니다. <br/>취미를
        기록하는{" "}
        <a
          href="https://blog.naver.com/yuteta"
          target="_blank"
          rel="noreferrer noopener"
        >
          개인 블로그
        </a>
        도 가끔 작성합니다.
      </p>
    </section>
    <section className="section">
      <h2 className="section-title">
        Career<span className="comma">,</span>
      </h2>
      <ul className="list-career">
        <li className="item">
          <h3 className="item-title">
            <a
              href="https://slowalk.co.kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              슬로워크
            </a>
          </h3>
          <p className="item-excerpt">프론트엔드 개발자 / 2014.02 ~ 2019.03</p>
        </li>
        <li className="item">
          <h3 className="item-title">
            <a
              href="https://trazy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              트레이지
            </a>
          </h3>
          <p className="item-excerpt">프론트엔드 개발자 / 2019.07 ~</p>
        </li>
      </ul>
    </section>
    <section className="section">
      <h2 className="section-title">
        Spec<span className="comma">,</span>
      </h2>
      <p>
        HTML, CSS, LESS, SCSS, styled-components, JavaScript, TypeScript,
        Next.js, React.js, Redux, jQuery, ES6, Vue.js, Vuex, d3.js, Wordpress,
        git, grunt, gulp, bower
      </p>
    </section>
    <section className="section">
      <h2 className="section-title">
        Portfolio<span className="comma">,</span>
      </h2>
      <ul className="list-portfolio">
        <li className="item">
          <h3 className="item-title">
            <a
              href="https://trazy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trazy
            </a>
          </h3>
          <p className="item-excerpt">
            팀장, 프론트엔드 개발 / 스타일 및 카트, 결제 프로세스 개발 /
            Next.js, Redux, Immutable.js, TypeScript, styled-components
          </p>
        </li>
        <li className="item">
          <h3 className="item-title">
            <a
              href="https://master.d3nlc0uyexnhon.amplifyapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              대한민국 뉴스 소비 지도
            </a>
          </h3>
          <p className="item-excerpt">
            전체 개발 / 데이터 시각화 및 지도 개발 / react.js, d3.js, openstreet
            map, scss
          </p>
        </li>
        <li className="item">
          <h3 className="item-title">
            <a
              href="https://www.socar.kr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              쏘카
            </a>
          </h3>
          <p className="item-excerpt">
            PL, 프론트엔드 개발 / 회원관련 페이지 데이터 통신 및 상태관리 개발 /
            vue.js, vuex
          </p>
        </li>
        <li className="item">
          <h3 className="item-title">
            <a
              href="http://graphicmag.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              propaganda
            </a>
          </h3>
          <p className="item-excerpt">
            프론트엔드 개발, 워드프레스 개발 / vue.js + 워드프레스 테마 개발 /
            vue.js, wordpress, PostCSS
          </p>
        </li>
        <li className="item">
          <h3 className="item-title">
            <a
              href="https://play.google.com/store/apps/details?id=com.tourlive"
              target="_blank"
              rel="noopener noreferrer"
            >
              투어라이브
            </a>
          </h3>
          <p className="item-excerpt">
            앱 프론트엔드 개발, PM 대리 / native base 커스터마이즈 개발 / react
            native, native base
          </p>
        </li>
        <li className="item">
          <h3 className="item-title">
            <a
              href="http://www.beautifulstore.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              아름다운가게 통합사이트
            </a>
          </h3>
          <p className="item-excerpt">
            퍼블리싱, 워드프레스 개발 / 워드프레스 멀티사이트 개발, 기증신청폼
            유효성검사 및 인터랙션 개발 / wordpress
          </p>
        </li>
        <li className="item">
          <h3 className="item-title">
            <a
              href="http://realmania.net/euro2016/"
              target="_blank"
              rel="noopener noreferrer"
            >
              레알매니아 유로2016
            </a>{" "}
            &amp;{" "}
            <a
              href="http://realmania.net/awards/1516/"
              target="_blank"
              rel="noopener noreferrer"
            >
              1516 시즌 어워드페이지
            </a>
          </h3>
          <p className="item-excerpt">
            전체 개발, 디자인 / 축구 포메이션 반응형 개발, d3 + fullpage 연동
            개발 / wordpress, d3.js, fullpage.js
          </p>
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
