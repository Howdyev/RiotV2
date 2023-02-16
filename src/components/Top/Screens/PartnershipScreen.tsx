import React, { FunctionComponent } from "react";
import { ScreenProps } from "pages";
import bannerBg from "../../../images/banner.jpg";
import partnerImg from "../../../images/partnership.jpg";
import videoBlur from "../../../images/blur.png";
import videoBg from "../../../images/banner.mp4";

const PartnershipScreen: FunctionComponent<ScreenProps> = function ({ screenInfo }) {
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
  return (
    <div>
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
      <div className="front_page" data-page={screenInfo.order} style={spBgStyle}>
        <div className="front_container partner_front" style={spBlurStyle}>
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
    </div>
  );
};

export default PartnershipScreen;
