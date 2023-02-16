import React, { useRef, FunctionComponent } from "react";
import { useState } from "react";
import { ScreenProps } from "pages";
import emailjs from "@emailjs/browser";
import goTopImg from "../../../images/up_icon.png";

const ContactScreen: FunctionComponent<ScreenProps> = function ({ screenInfo }) {
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
    <div>
      {!isMobile && (
        <section className="page_back" data-page={screenInfo.order}>
          <div className="page_inner" style={{ backgroundColor: `#F2F8F7` }}></div>
        </section>
      )}
      <div className="front_page" data-page={screenInfo.order}>
        <div className="front_container contact_front">
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
          {!isMobile && (
            <div className="top_btn">
              <div className="overflow_hidden">
                <div className="page_top_btn front_el">
                  <img src={goTopImg} />
                  <p>PAGE TOP</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {isMobile && (
        <div className="footer">
          <div className="footer_wrap">
            <ul className="">
              <li>
                <a className="anchor_goto" data-goto={2}>
                  Service
                </a>
              </li>
              <li>
                <a className="anchor_goto" data-goto={3}>
                  About Us
                </a>
              </li>
              <li>
                <a className="anchor_goto" data-goto={4}>
                  Work
                </a>
              </li>
              <li>
                <a className="anchor_goto" data-goto={5}>
                  Partnership
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="anchor_goto" data-goto={6}>
                  Recruit
                </a>
              </li>
              <li>
                <a className="anchor_goto" data-goto={7}>
                  Message
                </a>
              </li>
              <li>
                <a className="anchor_goto" data-goto={8}>
                  News
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright">
            <p>株式会社ライオット（株式会社RIOT）</p>
          </div>
        </div>
      )}
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
    </div>
  );
};

export default ContactScreen;
