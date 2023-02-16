import LogoSvg from "components/Common/LogoSVG";
import React, { FunctionComponent, useEffect, useState } from "react";

const Header: FunctionComponent = function () {
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
    if (position < window.innerHeight) {
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
      document.querySelectorAll(".custom_scroller").forEach((it) => {
        it.addEventListener("scroll", handleScroll, { passive: true });
      });
    }
  }, []);

  return (
    <header className="site_header">
      {showLogo && (
        <a className="header_logo anchor_goto" data-goto={1}>
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
            <a className="anchor_goto" onClick={_onMenuItemClicked} data-goto={2}>
              Service
            </a>
          </li>
          <li>
            <a className="anchor_goto" onClick={_onMenuItemClicked} data-goto={3}>
              About Us
            </a>
          </li>
          <li>
            <a className="anchor_goto" onClick={_onMenuItemClicked} data-goto={4}>
              Work
            </a>
          </li>
          <li>
            <a className="anchor_goto" onClick={_onMenuItemClicked} data-goto={5}>
              Partnership
            </a>
          </li>
          <li>
            <a className="anchor_goto" onClick={_onMenuItemClicked} data-goto={6}>
              Recruit
            </a>
          </li>
          <li>
            <a className="anchor_goto" onClick={_onMenuItemClicked} data-goto={7}>
              Message
            </a>
          </li>
          <li>
            <a className="anchor_goto" onClick={_onMenuItemClicked} data-goto={8}>
              News
            </a>
          </li>
          <li>
            <a className="contact anchor_goto" onClick={_onMenuItemClicked} data-goto={9}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
