import React, { FunctionComponent } from "react";
import { ScreenProps } from "../../../types/ScreenInfo.types";
import videoBlur from "../../../images/blur.png";
import videoBg from "../../../images/service.mp4";
import serviceBg from "../../../images/service_bg_image.jpg";
import { runClosing } from "../../../types/utils";
import { navigate } from "gatsby";
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const ServiceScreen: FunctionComponent<ScreenProps> = function ({ screenInfo }) {
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
  const readmoreClicked = () => {
    runClosing();
    setTimeout(() => {
      navigate("/service");
    }, 1000);
  };

  // const openPath = (path: String) => {
  //     runClosing()
  //     setTimeout(() => {
  //         navigate(path)
  //     }, 1000)
  // }

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
        <div className="front_container service_front" style={spBlurStyle}>
          <div className="service_content" data-sppage={screenInfo.order}>
            {/* <BackgroundImage
              Tag="div"
              className={"custom_heading"}
              fluid={imageData}
              backgroundColor={`#040e18`}
            >
              <h2>gatsby-background-image</h2>
            </BackgroundImage> */}
            {/* <div className="common_heading">
              <div className="front_el">
                <h2>{screenInfo.title}</h2>
                <p>
                  <span>&nbsp;</span>
                </p>
              </div>
            </div> */}
            <div className="service_list front_el">
              <div className="single_service">
                <div className="service_image">
                  <StaticImage src="../../../images/service_content_image_1.jpg" alt="受託" />
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
                  <StaticImage src="../../../images/service_content_image_2.jpg" alt="SES" />
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
                  <StaticImage src="../../../images/service_content_image_3.jpg" alt="SES" />
                </div>
                <div className="service_text">
                  <h3>
                    <span>03</span>フリーランスマッチングサービス
                  </h3>
                  <p>...coming soon</p>
                </div>
              </div>
            </div>
            <div className="readmore_wrap front_el">
              <a onClick={readmoreClicked} className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceScreen;
