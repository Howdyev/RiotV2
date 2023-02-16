import React, { FunctionComponent } from "react";
import { ScreenProps } from "pages";
import workBg from "../../../images/work_bg_image.jpg";
import workImg from "../../../images/work.jpg";
import videoBlur from "../../../images/blur.png";
import videoBg from "../../../images/work.mp4";

const WorkScreen: FunctionComponent<ScreenProps> = function ({ screenInfo }) {
  let isMobile = false;
  if (typeof window !== "undefined") {
    if (window.innerWidth < 767) {
      isMobile = true;
    }
  }
  var spBgStyle = { backgroundImage: `url(${workBg})` };
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
        <div className="front_container work_front" style={spBlurStyle}>
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
                <img src={workImg} />
              </div>
              <div className="work_text front_el">
                <p>
                  弊社として、web SP / PC のフロントエンド部分を担当しました。
                  <br />
                  代表の下野がテックリードとして、設計から製造まで一貫して携わりました。
                  <br />
                  <br />
                  <a href="https://tv.dmm.com/vod/">https://tv.dmm.com/vod/</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkScreen;
