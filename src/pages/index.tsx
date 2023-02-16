import React, { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import { screenInfoList } from "../types/ScreenInfo.types";
import TopStyle from "components/Top/TopStyle";
import BgLine from "components/Top/BgLine";
import Header from "components/Top/Header";
import SocialButtons from "components/Top/SocialButtons";
import ScrollNextButton from "components/Top/ScrollNextButton";

import BannerScreen from "components/Top/Screens/BannerScreen";
import ServiceScreen from "components/Top/Screens/ServiceScreen";
import AboutUsScreen from "components/Top/Screens/AboutUsScreen";
import WorkScreen from "components/Top/Screens/WorkScreen";
import PartnershipScreen from "components/Top/Screens/PartnershipScreen";
import RecruitScreen from "components/Top/Screens/RecruitScreen";
import MessageScreen from "components/Top/Screens/MessageScreen";
import NewsScreen from "components/Top/Screens/NewsScreen";
import ContactScreen from "components/Top/Screens/ContactScreen";
import Loading from "components/Top/Loading";
import Closing from "components/Common/Closing";
import { Helmet } from "react-helmet";
import DotSelector from "components/Top/DotSelector";

const IndexPage: FunctionComponent = function () {
  let isMobile = false;
  if (typeof window !== "undefined") {
    if (window.innerWidth < 767) {
      isMobile = true;
    }
  }

  const [loading, setLoading] = useState(true);
  const [gPageNo, setGlobalPageNo] = useState(1);

  useEffect(() => {
    let cur_pageno: number = 1;
    let max_pages = screenInfoList.length;
    let g_scrollDelta = 0;
    let g_animating = true;
    let max_page_speed = 1000;
    let max_scale_speed = 200;
    let max_inner_scale = 0.8;
    let ease_func = "cubic-bezier(.7,0,.3,1)";
    let out_ease_func = "cubic-bezier(.7,0,.3,1)";
    let in_ease_func = "cubic-bezier(0,0,0.5,1)";
    let front_ease = "cubic-bezier(.52,.08,.18,1)";
    let front_anitime = 700;
    let absH = 100;
    let show_order = 0;
    // Control loading animation
    document.querySelectorAll(".first_mask").forEach((it) => {
      it.style.opacity = 0;
    });
    setTimeout(() => {
      document.querySelectorAll(".loader_layer").forEach((it) => {
        it.style.opacity = 0;
      });
      setTimeout(() => {
        setLoading(false);
        g_animating = false;
      }, 1000);
    }, 2000);
    document.querySelectorAll(".anchor_goto").forEach((anchor) => {
      anchor.addEventListener("click", function () {
        let jumpto = parseInt(anchor.dataset.goto);
        if (!isMobile) {
          goto_page(jumpto);
        } else {
          document.querySelectorAll("[data-sppage='" + jumpto + "']").forEach((it) => {
            it.scrollIntoView();
          });
        }
      });
    });
    if (isMobile) return;

    init_pages(1);
    let scrollEventHandler = function (event: Event) {
      // event.preventDefault();
      g_scrollDelta = event.wheelDelta || -event.detail;
      if (g_scrollDelta < 0) {
        customOnScroll(-1);
      } else {
        customOnScroll(1);
      }
    };
    document.addEventListener("mousewheel", scrollEventHandler);
    function customOnScroll(direction: number) {
      if (direction < 0) {
        goto_page(cur_pageno + 1);
      } else if (direction > 0) {
        goto_page(cur_pageno - 1);
      }
    }
    document.querySelectorAll(".slider_next").forEach((it) => {
      it.addEventListener("click", function () {
        goto_page(cur_pageno + 1);
      });
    });
    document.querySelectorAll(".page_top_btn").forEach((it) => {
      it.addEventListener("click", function () {
        goto_page(1);
      });
    });
    document.querySelectorAll(".HomeNavDots-list-item").forEach((it) => {
      it.addEventListener("click", function () {
        let pageno: number = parseInt(it.dataset.page);
        if (pageno < 1 || pageno > max_pages) return;
        goto_page(pageno);
      });
    });
    function init_pages(pageno: number) {
      for (let i = 1; i <= max_pages; i++) {
        document.querySelectorAll(".page_back[data-page='" + i + "']").forEach((it) => {
          it.style.transform = "translate3d(-200%, -200%, 0)";
        });
        document.querySelectorAll(".front_page[data-page='" + i + "']").forEach((it) => {
          it.style.transform = "translate3d(-200%, -200%, 0)";
        });
      }
      document.querySelectorAll(".page_back[data-page='" + pageno + "']").forEach((it) => {
        it.style.transform = "translate3d(0, 0, 0)";
      });
      document.querySelectorAll(".front_page[data-page='" + pageno + "']").forEach((it) => {
        it.style.transform = "translate3d(0, 0, 0)";
      });
      document.body.className = "viewing-page-" + pageno;
      document.body.classList.add(screenInfoList[pageno - 1].theme);
      document.querySelectorAll(".HomeNavDots-list-item").forEach((it) => {
        it.classList.remove("active");
        if (it.dataset.page == pageno) it.classList.add("active");
      });
    }
    function goto_page(pageno: number) {
      if (g_animating) return;
      if (pageno < 1 || pageno > max_pages) return;
      if (pageno == cur_pageno) return;
      g_animating = true;

      setTimeout(() => {
        g_animating = false;
      }, 2000);

      let left = -20;
      let top = -100;
      let anitime = 10;
      if (pageno == max_pages) {
        document.querySelectorAll(".next_btn .slider_next").forEach((it) => {
          it.style.display = "none";
        });
      } else {
        document.querySelectorAll(".next_btn .slider_next").forEach((it) => {
          it.style.display = "block";
        });
      }
      document.querySelectorAll(".HomeNavDots-list-item").forEach((it) => {
        it.classList.remove("active");
        if (it.dataset.page == pageno) {
          it.classList.add("active");
        }
      });
      if (pageno > cur_pageno) {
        let next_pageno: number = pageno;
        document.querySelectorAll(".front_page[data-page='" + cur_pageno + "'] .front_el").forEach((it) => {
          //remove current front elements
          let matH = it.offsetHeight;
          let dataH = parseInt(it.dataset.height);
          if (dataH > 0) matH = dataH;
          if (absH > 0) matH = absH;
          matH = -matH;
          // it.style.transform = "matrix(1, 0, 0, 1, 0, "+matH+")"
          it.style.transform = "matrix(1, 0, 0, 1, 0, -100)";
          (it.style.opacity = "0"), (it.style.transition = "all " + front_anitime + "ms " + front_ease);
          it.style.transitionDelay = "unset";
        });
        document.querySelectorAll(".front_page[data-page='" + pageno + "'] .front_el").forEach((it) => {
          //prepar next front elements
          let matH = it.height;
          let dataH = parseInt(it.dataset.height);
          if (dataH > 0) matH = dataH;
          if (absH > 0) matH = absH;
          it.style.transform = "matrix(1, 0, 0, 1, 0, " + matH + ")";
          it.style.opacity = "0";
          it.style.transition = "unset";
          it.style.transitionDelay = "unset";
        });
        let previous_page = cur_pageno;
        setTimeout(() => {
          //replace current front page to next page.
          document.querySelectorAll(".front_page[data-page='" + previous_page + "']").forEach((it) => {
            it.style.transform = "translate3d(-200%, -200%, 0)";
          });
          document.querySelectorAll(".front_page[data-page='" + pageno + "']").forEach((it) => {
            it.style.transform = "translate3d(0, 0, 0)";
          });
        }, 1000);
        setTimeout(() => {
          //show next front elements
          show_order = 0;
          document.querySelectorAll(".front_page[data-page='" + pageno + "'] .front_el").forEach((it) => {
            let this_order = parseInt(it.dataset.order);
            let rand_delay = show_order * 100;
            if (this_order > 0) rand_delay = (this_order - 1) * 100;
            (it.style.transform = "matrix(1, 0, 0, 1, 0, 0)"),
              (it.style.opacity = "1"),
              (it.style.transition = "all " + front_anitime + "ms " + front_ease),
              (it.style.transitionDelay = rand_delay + "ms"),
              (show_order = show_order + 1);
          });
        }, 1000);
        document.body.className = "";
        document.body.classList.add("viewing-page-" + next_pageno);
        document.body.classList.add(screenInfoList[next_pageno - 1].theme);
        //prepare for page transition
        left = 20;
        top = 200;
        anitime = 10;
        document.querySelectorAll(".page_back[data-page='" + next_pageno + "']").forEach((it) => {
          it.style.transform = "translate3d(" + left + "%, " + top + "%, 0)";
          it.style.transition = "all " + anitime + "ms " + ease_func;
          it.style.transitionDelay = "unset";
        });
        document.querySelectorAll(".page_back[data-page='" + next_pageno + "'] .page_inner").forEach((it) => {
          it.style.transform = "scale(" + max_inner_scale + "," + max_inner_scale + ")";
          it.style.transition = "all " + anitime + "ms " + ease_func;
          it.style.transitionDelay = "unset";
        });
        setTimeout(() => {
          left = 0;
          top = 0;
          anitime = max_page_speed * 1.2;
          document.querySelectorAll(".page_back[data-page='" + next_pageno + "']").forEach((it) => {
            it.style.transform = "translate3d(" + left + "%, " + top + "%, 0)";
            it.style.transition = "all " + anitime + "ms " + ease_func;
            it.style.transitionDelay = "unset";
          });
          document.querySelectorAll(".page_back[data-page='" + next_pageno + "'] .page_inner").forEach((it) => {
            it.style.transform = "scale(1, 1)";
            it.style.transition = "all " + anitime + "ms " + ease_func;
            it.style.transitionDelay = "400ms";
          });
          left = -20;
          top = -100;
          anitime = max_page_speed;
          document.querySelectorAll(".page_back[data-page='" + cur_pageno + "']").forEach((it) => {
            it.style.transform = "translate3d(" + left + "%, " + top + "%, 0)";
            it.style.transition = "all " + anitime + "ms " + ease_func;
            it.style.transitionDelay = "100ms";
          });
          document.querySelectorAll(".page_back[data-page='" + cur_pageno + "'] .page_inner").forEach((it) => {
            it.style.transform = "scale(" + max_inner_scale + "," + max_inner_scale + ")";
            it.style.transition = "all " + anitime + "ms " + in_ease_func;
            it.style.transitionDelay = "unset";
          });
          cur_pageno = next_pageno;
        }, 30);
      } else {
        let prev_pageno = pageno;
        document.querySelectorAll(".front_page[data-page='" + cur_pageno + "'] .front_el").forEach((it) => {
          //remove current front elements
          let matH = it.height;
          let dataH = parseInt(it.dataset.height);
          if (dataH > 0) matH = dataH;
          if (absH > 0) matH = absH;
          it.style.transform = "matrix(1, 0, 0, 1, 0, " + matH + ")";
          it.style.opacity = "0";
          it.style.transition = "all " + front_anitime + "ms " + front_ease;
          it.style.transitionDelay = "unset";
        });
        document.querySelectorAll(".front_page[data-page='" + pageno + "'] .front_el").forEach((it) => {
          //prepare preve front elements
          let matH = it.height;
          let dataH = parseInt(it.dataset.height);
          if (dataH > 0) matH = dataH;
          if (absH > 0) matH = absH;
          matH = -matH;
          it.style.transform = "matrix(1, 0, 0, 1, 0, " + matH + ")";
          it.style.opacity = "0";

          it.style.transition = "unset";
          it.style.transitionDelay = "unset";
        });
        let previous_page = cur_pageno;
        setTimeout(() => {
          //replace current front page to preve page
          document.querySelectorAll(".front_page[data-page='" + previous_page + "']").forEach((it) => {
            it.style.transform = "translate3d(-200%, -200%, 0)";
          });
          document.querySelectorAll(".front_page[data-page='" + pageno + "']").forEach((it) => {
            it.style.transform = "translate3d(0, 0, 0)";
          });
        }, 1000);
        setTimeout(() => {
          //show next front elements
          show_order = 0;
          document.querySelectorAll(".front_page[data-page='" + pageno + "'] .front_el").forEach((it) => {
            let this_order = parseInt(it.dataset.order);
            let rand_delay = show_order * 100;
            if (this_order > 0) rand_delay = (this_order - 1) * 100;
            (it.style.transform = "matrix(1, 0, 0, 1, 0, 0)"), (it.style.opacity = "1");
            it.style.transition = "all " + front_anitime + "ms " + front_ease;
            it.style.transitionDelay = rand_delay + "ms";
            show_order = show_order + 1;
          });
        }, 1000);
        document.body.className = "";
        document.body.classList.add("viewing-page-" + prev_pageno);
        document.body.classList.add(screenInfoList[prev_pageno - 1].theme);
        left = -20;
        top = -200;
        anitime = 10;
        document.querySelectorAll(".page_back[data-page='" + prev_pageno + "']").forEach((it) => {
          it.style.transform = "translate3d(" + left + "%, " + top + "%, 0)";
          it.style.transition = "all " + anitime + "ms " + ease_func;
          it.style.transitionDelay = "unset";
        });
        document.querySelectorAll(".page_back[data-page='" + prev_pageno + "'] .page_inner").forEach((it) => {
          it.style.transform = "scale(" + max_inner_scale + "," + max_inner_scale + ")";
          it.style.transition = "all " + anitime + "ms " + ease_func;
          it.style.transitionDelay = "unset";
        });
        setTimeout(() => {
          left = 0;
          top = 0;
          anitime = max_page_speed * 1.2;
          document.querySelectorAll(".page_back[data-page='" + prev_pageno + "']").forEach((it) => {
            it.style.transform = "translate3d(" + left + "%, " + top + "%, 0)";
            it.style.transition = "all " + anitime + "ms " + ease_func;
            it.style.transitionDelay = "unset";
          });
          document.querySelectorAll(".page_back[data-page='" + prev_pageno + "'] .page_inner").forEach((it) => {
            it.style.transform = "scale(1, 1)";
            it.style.transition = "all " + anitime + "ms " + ease_func;
            it.style.transitionDelay = "400ms";
          });
          left = 20;
          top = 100;
          anitime = max_page_speed;
          document.querySelectorAll(".page_back[data-page='" + cur_pageno + "']").forEach((it) => {
            it.style.transform = "translate3d(" + left + "%, " + top + "%, 0)";
            it.style.transition = "all " + anitime + "ms " + ease_func;
            it.style.transitionDelay = "100ms";
          });
          document.querySelectorAll(".page_back[data-page='" + cur_pageno + "'] .page_inner").forEach((it) => {
            it.style.transform = "scale(" + max_inner_scale + "," + max_inner_scale + ")";
            it.style.transition = "all " + 1000 + "ms ";
            it.style.transitionDelay = "unset";
          });
          cur_pageno = prev_pageno;
        }, 30);
      }
    }
  }, []);

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

      <Header />
      <TopStyle />

      {!isMobile && <BgLine />}
      {!isMobile && <SocialButtons />}
      {!isMobile && <DotSelector />}
      {!isMobile && <ScrollNextButton gPageNo={gPageNo} />}
      <div className="custom_scroller">
        <BannerScreen screenInfo={screenInfoList[0]} />
        <ServiceScreen screenInfo={screenInfoList[1]} />
        <AboutUsScreen screenInfo={screenInfoList[2]} />
        <WorkScreen screenInfo={screenInfoList[3]} />
        <PartnershipScreen screenInfo={screenInfoList[4]} />
        <RecruitScreen screenInfo={screenInfoList[5]} />
        <MessageScreen screenInfo={screenInfoList[6]} />
        <NewsScreen screenInfo={screenInfoList[7]} />
        <ContactScreen screenInfo={screenInfoList[8]} />
      </div>

      {loading && <Loading />}
      <Closing />
    </React.Fragment>
  );
};

export default IndexPage;
