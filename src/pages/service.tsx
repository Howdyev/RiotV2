import React, { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import TopStyle from "components/Top/TopStyle";
import SubHeader from "components/Common/SubHeader";
import SocialButtons from "components/Top/SocialButtons";
import SubLoading from "components/Common/SubLoading";
import { Helmet } from "react-helmet";
import { ScreenInfoType, ScreenProps, screenInfoList } from "../types/ScreenInfo.types";
import SubFooter from "components/Common/SubFooter";
import serviceImg1 from "../images/service_content_image_1.jpg";
import serviceImg2 from "../images/service_content_image_2.jpg";
import serviceImg3 from "../images/service_content_image_3.jpg";
import videoBlur from "../images/blur.png";
import videoBg from "../images/service.mp4";
import serviceBg from "../images/service_bg_image.jpg";

export type ScreenInfoType = {
  order: number;
  slug: String;
  title: String;
  theme: String;
};

export type ScreenProps = {
  screenInfo: ScreenInfoType;
};

const ServicePage: FunctionComponent = function () {
  let isMobile = false;
  if (typeof window !== "undefined") {
    if (window.innerWidth < 767) {
      isMobile = true;
    }
  }
  var spBgStyle = { backgroundImage: `url(${serviceBg})` };
  var spBlurStyle = { backgroundImage: `url(${videoBlur})` };
  if (!isMobile) {
    spBgStyle = {};
    spBlurStyle = {};
  }

  const [loading, setLoading] = useState(true);

  const screenInfo = screenInfoList[1];

  useEffect(() => {
    //Control loading animation
    document.querySelectorAll(".loader_layer").forEach((it) => {
      it.style.opacity = 0;
    });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // setTimeout(()=>{
    //     document.querySelectorAll(".loader_layer").forEach( (it) => {
    //         it.style.opacity = 0;
    //     })
    //     setTimeout(()=>{
    //         setLoading(false)
    //     }, 1000);
    // }, 5000);
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
          <div className="subpage_container service_front" style={spBlurStyle}>
            <div className="service_content">
              <div className="common_heading">
                <div className="front_el">
                  <h2>{screenInfo.title}</h2>
                  <p>
                    <span>&nbsp;</span>
                  </p>
                </div>
              </div>
              <div className="service_list front_el">
                <div className="single_service">
                  <div className="service_image">
                    <img src={serviceImg1} />
                  </div>
                  <div className="service_text">
                    <h3>
                      <span>01</span>受託
                    </h3>
                    <p>
                      Web系を専門にして開発を行います。 要件定義などのいわゆる上流工程の業務から、保守 ・
                      運用業務まで、システム開発の全工程を請け負っております。
                      今までの経験から特にフロントエンド開発を得意にしておりまして、フロントのみでの開発を行うことも可能です。お気軽にご相談ください
                    </p>
                  </div>
                </div>
                <div className="single_service">
                  <div className="service_image">
                    <img src={serviceImg2} />
                  </div>
                  <div className="service_text">
                    <h3>
                      <span>02</span>SES
                    </h3>
                    <p>
                      システム開発業務に必要なエンジニアを、必要な期間ご提供するサービスです。
                      当社では、設計、開発、運用保守まで一貫して担当できるエンジニアが揃っています。チーム体制でのご提案も可能です。
                    </p>
                  </div>
                </div>
                <div className="single_service">
                  <div className="service_image">
                    <img src={serviceImg3} />
                  </div>
                  <div className="service_text">
                    <h3>
                      <span>03</span>フリーランスマッチングサービス
                    </h3>
                    <p>...coming soon</p>
                  </div>
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

export default ServicePage;
