import React, { FunctionComponent } from "react";
import videoBlur from "../../../images/blur.png";
import videoBg from "../../../images/banner.mp4";
import bannerBg from "../../../images/banner.jpg";
import { ScreenProps } from "pages";

const BannerScreen: FunctionComponent<ScreenProps> = function ({ screenInfo }) {
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
      <div className="front_page" data-page={screenInfo.order} style={spBgStyle} id="scroll_focus">
        <div className="front_container banner_front" style={spBlurStyle}>
          <div className="banner_title front_el">
            <h1>挑戦し続ける会社に</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerScreen;
