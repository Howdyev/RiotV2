import React, { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import TopStyle from "components/Top/TopStyle";
import SubHeader from "components/Common/SubHeader";
import SocialButtons from "components/Top/SocialButtons";
import SubLoading from "components/Common/SubLoading";
import { Helmet } from "react-helmet";
import { ScreenInfoType, ScreenProps, screenInfoList } from "../types/ScreenInfo.types";
import SubFooter from "components/Common/SubFooter";
import recruitBg from "../images/recruit_bg.jpg";
import videoBlur from "../images/blur.png";
import videoBg from "../images/recruit.mp4";

const RecruitPage: FunctionComponent = function () {
  let isMobile = false;
  if (typeof window !== "undefined") {
    if (window.innerWidth < 767) {
      isMobile = true;
    }
  }
  var spBgStyle = { backgroundImage: `url(${recruitBg})` };
  var spBlurStyle = { backgroundImage: `url(${videoBlur})` };
  if (!isMobile) {
    spBgStyle = {};
    spBlurStyle = {};
  }

  const [loading, setLoading] = useState(true);

  const screenInfo = screenInfoList[5];

  useEffect(() => {
    // Control loading animation
    document.querySelectorAll(".loader_layer").forEach((it) => {
      it.style.opacity = 0;
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    document.body.className = "";
    document.body.classList.add("viewing-page-" + screenInfo.order);
    document.body.classList.add(screenInfo.theme);
    if (isMobile) return;
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>株式会社ライオット（株式会社RIOT）</title>
        <meta name="description" content="株式会社ライオット（株式会社RIOT）" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta property="og:title" content="W株式会社ライオット（株式会社RIOT）ßß" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="<http://www.my-website.com/>" />
        <meta property="og:image" content="<http://my-website.com/image.jpg>" />
        <meta property="og:description" content="WebSite Description" />
        <meta property="og:site_name" content="Site Name, i.e. Moz" />

        <meta property="fb:app_id" content="Application ID" />
        <meta property="fb:admins" content="Facebook numeric ID" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@publisher_handle" />
        <meta name="twitter:title" content="Page Title" />
        <meta name="twitter:description" content="Page description less than 200 characters" />
        <meta name="twitter:creator" content="@author_handle" />
        <meta name="twitter:image" content="<http://www.example.com/image.jpg>" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
      </Helmet>

      <SubHeader />
      <TopStyle />
      {!isMobile && <SocialButtons />}
      <div className="subpage_scroller">
        {!isMobile && (
          <section className="page_back" data-page={screenInfo.order}>
            <div className="page_inner">
              <video width="100%" height="100%" autoPlay muted loop>
                <source src={videoBg} type="video/mp4" />
              </video>
              <div className="video_blur" style={{ backgroundImage: `url(${videoBlur})` }}></div>
            </div>
          </section>
        )}
        <div className="subpage" style={spBgStyle}>
          <div className="subpage_container recruit_front" style={spBlurStyle}>
            <div className="recruit_content">
              <div className="common_heading">
                <div className="front_el">
                  <h2>{screenInfo.title}</h2>
                  <p>
                    <span>&nbsp;</span>
                  </p>
                </div>
              </div>
              <div className="recruit_desc front_el">
                <p className="word_jp">
                  一緒に事業を
                  <wbr />
                  作っていただける方を
                  <wbr />
                  募集しています！
                  <wbr />
                  弊社は約
                  <wbr />
                  ４年間
                  <wbr />
                  SES事業や
                  <wbr />
                  受託開発を
                  <wbr />
                  していきながら、
                  <br />
                  自分達の
                  <wbr />
                  スキルを
                  <wbr />
                  磨き続けてきました。
                  <wbr />
                  会社としての
                  <wbr />
                  体力も
                  <wbr />
                  ついていき
                  <wbr />
                  新規事業を
                  <wbr />
                  作っていく
                  <wbr />
                  フェーズへ突入しています。
                  <br />
                  『一緒に
                  <wbr />
                  考え一緒に
                  <wbr />
                  悩める』
                  <wbr />
                  そんな仲間を
                  <wbr />
                  募集中です！
                  <wbr />
                  よければ
                  <wbr />
                  一緒に
                  <wbr />
                  働きませんか？
                </p>
              </div>
              <div className="recruit_list">
                <div className="recruit_item front_el">
                  <h3>フロントエンドエンジニア</h3>
                  <p>【必須スキル・経験】</p>
                  <ul>
                    <li>React.js / hooksのアプリケーション開発設計の経験</li>
                    <li>javascript ES5以上の経験がある</li>
                    <li>セマンティックなhtmlが組める</li>
                    <li>css,sassを理解し、レスポンシブ対応の経験 求める能力／スキル</li>
                  </ul>
                  <p>【歓迎スキル・経験】</p>
                  <ul>
                    <li>Next.js実務経験</li>
                    <li>ライブラリの開発経験</li>
                    <li>GraphQLによる実装経験 </li>
                    <li>BFFに関する知識やサーバーサイド実装経験</li>
                    <li>webpackの構築/運用 ・SEOやクローラーに関する知識</li>
                  </ul>
                  <p>【求める人物像】</p>
                  <ul>
                    <li>意思疎通が図れる</li>
                    <li>責任感がある</li>
                    <li>これまでの知見を活用し提案してくれる</li>
                    <li>自走力がある(自己学習して足りないスキルをキャッチアップしていける)</li>
                  </ul>
                </div>
                <div className="recruit_item front_el">
                  <h3>バックエンドエンジニア</h3>
                  <p>【必須スキル・経験】</p>
                  <ul>
                    <li>WEBアプリケーションの開発および運用経験が1年以上</li>
                  </ul>
                  <p>【歓迎スキル・経験】</p>
                  <ul>
                    <li>Go/Node.jsの開発経験</li>
                    <li>RDBMSやNoSQLを用いた開発経験</li>
                    <li>AWSやGCPでの環境構築および運用経験</li>
                    <li>DDDやマイクロサービスに関する知識</li>
                    <li>開発者のマネジメントやリードの経験</li>
                    <li>データ分析の経験</li>
                  </ul>

                  <p>【求める人物像】</p>
                  <ul>
                    <li>事業/プロダクトの課題を理解、技術を駆使して解決に向けて推進できる方</li>
                    <li>技術的な観点でチームをリードできる方</li>
                    <li>定量的に計測、改善を行いプロダクトを成長させていきたい方</li>
                    <li>課題が多い状況から紐解き、段階的に改善していくことにモチベーションを持っている方</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubFooter />
      </div>
      {loading && <SubLoading />}
    </React.Fragment>
  );
};

export default RecruitPage;
