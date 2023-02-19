import LogoSvg from "components/Common/LogoSVG";
import React, { FunctionComponent, useEffect, useState } from "react";

const SubHeader: FunctionComponent = function () {
  const cnHamburger = "navbar_toggler";
  const cnHamburgerCtr = "open_menu";
  const cnMenu = "custom_navbar";
  const cnMenuCtr = "navbar_animate";
  const [showLogo, setShowLogo] = useState(true);
  const [elHamburger, setElHamburger] = useState(cnHamburger);
  const [elMenu, setElMenu] = useState(cnMenu);
  let isMobile = false;

  if (typeof window !== "undefined") {
    if (window.innerWidth < 767) {
      isMobile = true;
    }
  }
  const handleScroll = (event) => {
    const position = event.target.scrollTop;
    if (position < 30) {
      setShowLogo(true);
    } else {
      setShowLogo(false);
    }
  };

  const _onMenuItemClicked = () => {
    if (isMobile) {
      setElHamburger(cnHamburger);
      setElMenu(cnMenu);
    }
  };

  const _onMenuClick = () => {
    if (elHamburger == cnHamburger) {
      setElHamburger(cnHamburger + " " + cnHamburgerCtr);
      setElMenu(cnMenu + " " + cnMenuCtr);
    } else {
      setElHamburger(cnHamburger);
      setElMenu(cnMenu);
    }
  };

  useEffect(() => {
    if (isMobile) {
      document.querySelectorAll(".subpage_scroller").forEach((it) => {
        it.addEventListener("scroll", handleScroll, { passive: true });
      });
    }
  }, []);

  return (
    <header className="site_header">
      {showLogo && (
        <a className="header_logo" href="/">
          <LogoSvg />
        </a>
      )}
      <a
        onClick={_onMenuClick}
        className={elHamburger}
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <div className="navbar_toggler_inner"></div>
      </a>
      <nav className={elMenu}>
        <ul className="custom_navbar_links">
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
            <a className="contact" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SubHeader;
