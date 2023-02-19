import React, { FunctionComponent } from "react";

const SubFooter: FunctionComponent = function () {
  let isMobile = false;
  if (typeof window !== "undefined") {
    if (window.innerWidth < 767) {
      isMobile = true;
    }
  }
  return (
    <React.Fragment>
      {isMobile && (
        <div className="footer">
          <div className="footer_wrap">
            <ul className="">
              <li>
                <a href="/service">Service</a>
              </li>
              <li>
                <a href="/aboutus">About Us</a>
              </li>
              <li>
                <a href="/work">Work</a>
              </li>
              <li>
                <a href="/partner">Partnership</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/recruit">Recruit</a>
              </li>
              <li>
                <a href="/message">Message</a>
              </li>
              <li>
                <a href="/news">News</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="copyright">
            <p>株式会社ライオット（株式会社RIOT）</p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SubFooter;
