import React, { FunctionComponent } from "react";
import companyImg from "../../../images/riot-company.jpg";
import { ScreenProps } from "pages";

const AboutUsScreen: FunctionComponent<ScreenProps> = function ({ screenInfo }) {
  let isMobile = false;
  if (typeof window !== "undefined") {
    if (window.innerWidth < 767) {
      isMobile = true;
    }
  }
  var spBgStyle = { backgroundColor: `#fff` };
  if (!isMobile) {
    spBgStyle = {};
  }
  return (
    <div>
      {!isMobile && (
        <section className="page_back" data-page={screenInfo.order}>
          <div className="page_inner" style={{ backgroundColor: `#fff` }}></div>
        </section>
      )}
      <div className="front_page" data-page={screenInfo.order} style={spBgStyle}>
        <div className="front_container aboutus_front">
          <div className="aboutus_content" data-sppage={screenInfo.order}>
            <div className="common_heading">
              <div className="front_el">
                <h2>{screenInfo.title}</h2>
                <p>
                  <span>&nbsp;</span>
                </p>
              </div>
            </div>
            <div className="aboutus_top">
              <div className="aboutus_info front_el">
                <div className="aboutus_item">
                  <dt>商号</dt>
                  <dd>株式会社ライオット（株式会社RIOT）</dd>
                </div>
                <div className="aboutus_item">
                  <dt>事業内容</dt>
                  <dd>システム開発　　SES</dd>
                </div>
                <div className="aboutus_item">
                  <dt>代表取締役</dt>
                  <dd>下野　隼</dd>
                </div>
                <div className="aboutus_item">
                  <dt>設立</dt>
                  <dd>2019年1月</dd>
                </div>
                <div className="aboutus_item">
                  <dt>所在地</dt>
                  <dd>東京都渋谷区広尾２丁目13番6号</dd>
                </div>
                <div className="aboutus_item">
                  <dt>資本金</dt>
                  <dd>1,000万円</dd>
                </div>
              </div>
              <div className="aboutus_img front_el">
                <img src={companyImg} />
              </div>
            </div>
          </div>
          <div style={{ height: 20 }}>&nbsp;</div>
          <div className="aboutus_map front_el">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.093646211283!2d139.71497861561133!3d35.65006433928735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b6c86608641%3A0x3b372ae7735abd98!2z5pel5pys44CB44CSMTUwLTAwMTIg5p2x5Lqs6YO95riL6LC35Yy65bqD5bC-77yS5LiB55uu77yR77yT4oiS77yW!5e0!3m2!1sja!2sus!4v1675668610460!5m2!1sja!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;