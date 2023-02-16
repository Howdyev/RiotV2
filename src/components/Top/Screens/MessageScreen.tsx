import React, { FunctionComponent } from "react";
import { ScreenProps } from "pages";
import messageBg from "../../../images/message_bg_image.jpg";
import ceoImg from "../../../images/ceo.png";
import ceoSignImg from "../../../images/ceo-sign.png";
import profileImg1 from "../../../images/profile1.png";
import profileImg2 from "../../../images/profile2.png";

const MessageScreen: FunctionComponent<ScreenProps> = function ({ screenInfo }) {
  let isMobile = false;
  if (typeof window !== "undefined") {
    if (window.innerWidth < 767) {
      isMobile = true;
    }
  }
  var spBgStyle = { backgroundImage: `url(${messageBg})` };
  if (!isMobile) {
    spBgStyle = {};
  }
  return (
    <div>
      {!isMobile && (
        <section className="page_back" data-page={screenInfo.order}>
          <div className="page_inner" style={{ backgroundImage: `url(${messageBg})` }}></div>
        </section>
      )}
      <div className="front_page" data-page={screenInfo.order} style={spBgStyle}>
        <div className="front_container message_front">
          <div className="message_content" data-sppage={screenInfo.order}>
            <div className="message_left">
              <div className="common_heading">
                <div className="front_el">
                  <h2>{screenInfo.title}</h2>
                  <p>
                    <span>&nbsp;</span>
                  </p>
                </div>
              </div>
              <div className="message_text front_el">
                <p className="word_jp">
                  社名「riot」は
                  <wbr />
                  ⼀般的には
                  <wbr />
                  「暴動」の
                  <wbr />
                  意味です。
                  <wbr />
                  「そんな名前ってどう︖」
                  <br />
                  でもriotには
                  <wbr />
                  ⼝語で
                  <wbr />
                  「とても
                  <wbr />
                  おもしろい⼈
                  <wbr />
                  （物、事）、
                  <wbr />
                  ⼤笑いのもと」
                  <wbr />
                  という意味が
                  <wbr />
                  あります。
                </p>
                <p className="word_jp">
                  辞書で引くと
                  <wbr />
                  ⾒落としがちな
                  <wbr />
                  ⼀番最後の
                  <wbr />
                  意味ですが、
                  <wbr />
                  僕たちは
                  <wbr />
                  この⾒落としがちなものを
                  <wbr />
                  拾い上げ、
                  <br />
                  とても
                  <wbr />
                  おもしろいことを
                  <wbr />
                  しよう︕
                  <wbr />
                  という思いを
                  <wbr />
                  込めて
                  <wbr />
                  「RIOT」と
                  <wbr />
                  名付けました。
                  <br />
                </p>
                <p className="word_jp">
                  そして
                  <wbr />
                  体育会系出⾝者ばかり
                  <wbr />
                  僕たちが、
                  <wbr />
                  試⾏錯誤の
                  <wbr />
                  上たどり
                  <wbr />
                  着いたのが
                  <wbr />
                  システムエンジニアとなって
                  <br />
                  インターネットサイトの
                  <wbr />
                  内側で
                  <wbr />
                  働く事。
                  <br />
                  現在、
                  <wbr />
                  システムエンジニアとして、
                  <wbr />
                  様々なシステム構築に
                  <wbr />
                  携わっています。
                </p>
                <p className="word_jp">
                  体育会系部活
                  <wbr />
                  (硬式野球部＆ダンス部！)
                  <wbr />
                  での厳しい練習に
                  <wbr />
                  耐えた
                  <wbr />
                  天下⼀品の
                  <wbr />
                  根性で
                  <wbr />
                  ⽬標に
                  <wbr />
                  向かって
                  <br />
                  努⼒を
                  <wbr />
                  惜しまず
                  <wbr />
                  持てる
                  <wbr />
                  技術を
                  <wbr />
                  駆使し、
                  <wbr />
                  クライアントに
                  <wbr />
                  最⾼の
                  <wbr />
                  パフォーマンスを
                  <wbr />
                  提供する、
                  <br />
                  それを
                  <wbr />
                  誇りとしています。
                </p>
                <p className="word_jp">
                  まだ
                  <wbr />
                  創業して
                  <wbr />
                  ５年目の
                  <wbr />
                  会社ですが、
                  <wbr />
                  これからの
                  <wbr />
                  成長を
                  <wbr />
                  お約束します。
                </p>
                <div className="left_div_wrap">
                  <div className="left_div1">
                    <div className="left_job">代表取締役</div>
                    <div className="left_name">下野　隼</div>
                  </div>
                  <div className="left_img">
                    <img src={ceoSignImg} />
                  </div>
                </div>
              </div>
            </div>
            <div className="message_right">
              <div className="profile_item ceo_item front_el">
                <div className="profile_img_wrap">
                  <img src={ceoImg} />
                </div>
                <div className="job_name">
                  <div className="job">代表取締役　|　エンジニア</div>
                  <div className="name">下野　隼</div>
                </div>
              </div>
              <div className="profile_row">
                <div className="profile_item front_el">
                  <div className="profile_wrap">
                    <img src={profileImg1} />
                    <div className="job_name">
                      <div className="job">代取締役　|　エンジニア</div>
                      <div className="name">石原　龍之介</div>
                    </div>
                  </div>
                </div>
                <div className="profile_item front_el">
                  <div className="profile_wrap">
                    <img src={profileImg2} />
                    <div className="job_name">
                      <div className="job">取締役　|　エンジニア</div>
                      <div className="name">村山　健太</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageScreen;
