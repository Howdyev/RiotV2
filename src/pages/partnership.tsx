import React, { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import TopStyle from "components/Top/TopStyle";
import SubHeader from "components/Common/SubHeader";
import SocialButtons from "components/Top/SocialButtons";
import SubLoading from "components/Common/SubLoading";
import { Helmet } from "react-helmet";
import SubFooter from "components/Common/SubFooter";
import { ScreenInfoType, ScreenProps, screenInfoList } from "../types/ScreenInfo.types";
import bannerBg from "../images/banner.jpg";
import partnerImg from "../images/partnership.jpg";
import videoBlur from "../images/blur.png";
import videoBg from "../images/banner.mp4";

const PartnershipPage: FunctionComponent = function () {
  let isMobile = false;
  if (typeof window !== "undefined") {
    if (window.innerWidth < 767) {
      isMobile = true;
    }
  }
  var spBgStyle = { backgroundImage: `url(${bannerBg})` };
  var spBlurStyle = { backgroundImage: `url(${videoBlur})` };
  if (!isMobile) {
    spBgStyle = {};
    spBlurStyle = {};
  }

  const [loading, setLoading] = useState(true);

  const screenInfo = screenInfoList[4];

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
          <div className="subpage_container partner_front" style={spBlurStyle}>
            <div className="work_content" data-sppage={screenInfo.order}>
              <div className="common_heading">
                <div className="front_el">
                  <h2>{screenInfo.title}</h2>
                  <p>
                    <span>&nbsp;</span>
                  </p>
                </div>
              </div>
              <div className="work_content">
                <div className="work_img front_el">
                  <img src={partnerImg} />
                </div>
                <div className="work_text front_el">
                  <p>
                    <span>合同会社DMM.com</span>
                  </p>
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

export default PartnershipPage;
