import React, { FunctionComponent } from "react";
import { useState, useEffect, useRef } from "react";
import TopStyle from "components/Top/TopStyle";
import SubHeader from "components/Common/SubHeader";
import SocialButtons from "components/Top/SocialButtons";
import SubLoading from "components/Common/SubLoading";
import { Helmet } from "react-helmet";
import { ScreenInfoType, ScreenProps, screenInfoList } from "../types/ScreenInfo.types";
import SubFooter from "components/Common/SubFooter";
import emailjs from "@emailjs/browser";

const ContactPage: FunctionComponent = function () {
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

  const [loading, setLoading] = useState(true);

  const screenInfo = screenInfoList[8];

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

  const [progressing, setProgressing] = useState(0);
  const [progressResult, setProgressResult] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    setProgressing(1);
    setProgressResult("");
    e.preventDefault();
    emailjs.sendForm("service_a9n0dek", "template_qdty9qm", form.current, "V8-ZdOnPzemM2gTPo").then(
      (result) => {
        form.current.reset();
        setProgressing(2);
        setProgressResult("送信に成功しました!");
        setTimeout(() => {
          setProgressing(0);
          setProgressResult("");
        }, 3000);
      },
      (error) => {
        form.current.reset();
        setProgressing(2);
        setProgressResult("送信に失敗しました");
        setTimeout(() => {
          setProgressing(0);
          setProgressResult("");
        }, 3000);
      }
    );
  };

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
            <div className="page_inner" style={{ backgroundColor: `#F2F8F7` }}></div>
          </section>
        )}
        <div className="subpage" style={spBgStyle}>
          <div className="subpage_container  contact_front">
            <div className="contact_width" data-sppage={screenInfo.order}>
              <div className="common_heading">
                <div className="front_el">
                  <h2>{screenInfo.title}</h2>
                  <p>
                    <span>&nbsp;</span>
                  </p>
                </div>
              </div>
              <form className="contact_form" ref={form} onSubmit={sendEmail}>
                <div className="radio_item front_el">
                  <div className="radio_wrap">
                    <input type="radio" id="radio1" name="request_type" value="受託をお探しの方" required />
                    <label htmlFor="radio1">受託をお探しの方</label>
                  </div>
                  <div className="radio_wrap">
                    <input type="radio" id="radio2" name="request_type" value="SESをお探しの方" />
                    <label htmlFor="radio2">SESをお探しの方</label>
                  </div>
                  <div className="radio_wrap">
                    <input type="radio" id="radio3" name="request_type" value="採用希望の方" />
                    <label htmlFor="radio3">採用希望の方</label>
                  </div>
                </div>
                <div className="input_item front_el">
                  <div className="input_label">
                    <div className="input_cap">
                      企業名・個人名<span>必須</span>
                    </div>
                    <div className="input_wrap">
                      <input type="text" placeholder="例：株式会社Riot" name="from_name" required />
                    </div>
                  </div>
                </div>
                <div className="input_item front_el">
                  <div className="input_label">
                    <div className="input_cap">
                      メールアドレス<span>必須</span>
                    </div>
                    <div className="input_wrap">
                      <input type="email" placeholder="例：anyone@example.com" name="from_email" required />
                    </div>
                  </div>
                </div>
                <div className="input_item front_el">
                  <div className="input_label">
                    <div className="input_cap">電話番号</div>
                    <div className="input_wrap">
                      <input type="number" placeholder="例：03012xxxx（ハイフンなし）" name="phone_number" />
                    </div>
                  </div>
                </div>
                <div className="input_item front_el">
                  <div className="input_label">
                    <div className="input_cap">お問い合わせ内容</div>
                    <div className="input_wrap">
                      <textarea
                        name="message"
                        placeholder="例：ご検討中のサービス利用詳細、お見積もり希望などご記入ください。"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="submit_item front_el">
                  <button type="submit" value="Send">
                    送信
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <SubFooter />
      </div>
      {loading && <SubLoading />}
      {progressing > 0 && (
        <div className="toast_window">
          <div className="toast_content">
            {progressing == 1 && (
              <div className="progress_mask">
                <div id="progress_spin"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.88 134.27">
                  <g>
                    <g>
                      <path d="m114.72,16.03c-6.45-18.47-39.06-21.92-72-5.41C25.41,19.3,11.45,32.19.66,46.21c-.49.63.27,1.45.84.91,4.94-4.74,10.49-9.28,16.55-13.44,30.83-21.17,63.18-24.58,72.27-7.62,5.22,9.74,1.62,24.07-8.21,38.52-1.1,1.61.58,3.64,2.12,2.58,22.62-15.59,35.68-36.28,30.5-51.12Z" />
                      <path d="m25.86,103.3c-9.23,2.77-18.52,3.72-25.71,2.72-.02,3.76,0,27.8,0,27.8h25.7s-.06-30.71,0-30.52Z" />
                      <path d="m24.44,67.34c-1.27,1.66-3.34,2.51-4.96,1.92-1.86-.68-2.43-2.97-1.27-5.13.77-1.45,2.13-2.44,3.49-2.75-.83-.79-1.82-1.42-2.98-1.85-5.75-2.09-13.3,1.62-16.87,8.29-3.57,6.67-1.8,13.77,3.94,15.86s13.3-1.62,16.87-8.29c1.47-2.74,2.02-5.55,1.78-8.06Z" />
                      <path d="m31.56,67.05s59.11,7.62,87.32,66.76h-40.21s10.21-37.19-47.11-66.76Z" />
                      <path d="m31.56,67.05s47.63,35.21,32.57,67.22l-19.48-.46s24.68-27.59-13.09-66.76Z" />
                    </g>
                  </g>
                </svg>
              </div>
            )}
            <p>{progressResult}</p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ContactPage;
