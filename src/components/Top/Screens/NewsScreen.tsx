import React, { FunctionComponent } from "react";
import { ScreenProps } from "pages";

const NewsScreen: FunctionComponent<ScreenProps> = function ({ screenInfo }) {
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
          <div className="page_inner" style={{ backgroundColor: `#fff` }}>
            <div className="aboutus_section"></div>
          </div>
        </section>
      )}
      <div className="front_page" data-page={screenInfo.order} style={spBgStyle}>
        <div className="front_container news_front">
          <div className="news_width" data-sppage={screenInfo.order}>
            <div className="news_left">
              <div className="common_heading">
                <div className="front_el">
                  <h2>{screenInfo.title}</h2>
                  <p>
                    <span>&nbsp;</span>
                  </p>
                </div>
              </div>
              <div className="news_list front_el">
                <div className="news_item">
                  <dt>2022.12.1</dt>
                  <dd>弊社が携わったDMMTVがリリースしました。</dd>
                </div>
                <div className="news_item">
                  <dt>2023.1.21</dt>
                  <dd>
                    商号「RIOT」を英字表記からカタカナ表記「ライオット」に変更しました。資本金を１０００万に増資しました。
                  </dd>
                </div>
                <div className="news_item">
                  <dt>2023.2.10</dt>
                  <dd>ホームページをリニューアルしました。</dd>
                </div>
              </div>
            </div>
            <div className="news_right front_el">
              <div className="news_date">2023.1.21</div>
              <div className="news_title">
                <h3>
                  タイトルテキストタイトルテキストタイトルテキストタイトルテキストタイトルテキストタイトルテキストタイトルテキストタイトルテキスト
                </h3>
              </div>
              <div className="news_detail">
                <p>
                  概要テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストがあります。
                </p>
                <p>
                  概要テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストがあります。
                </p>
                <p>
                  タイトルテキストタイトルテキストタイトルテキストタイトルテキストタイトルテキストタイトルテキストタイトルテキストタイトルテキスト
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsScreen;
