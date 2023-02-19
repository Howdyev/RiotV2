import React, { FunctionComponent } from "react";
import { BackgroundLine } from "components/common-styles";
import "../../styles/global.css";
import * as CommonStyles from "components/common-styles";
import * as Styles from "components/Layout/styles";
import bannerVideo from "../../images/banner.mp4";
import serviceVideo from "../../images/service.mp4";

const Layout: FunctionComponent = function ({ children }) {
  return (
<>
    {/* <HeaderLogo /> */}
    <BackgroundLine />
    <CommonStyles.PageInner>
        <video width="100%" height="100%" autoPlay muted loop>
            <source src={bannerVideo} type="video/mp4" />
        </video>
        <CommonStyles.BgBlur></CommonStyles.BgBlur>
    </CommonStyles.PageInner>
    <CommonStyles.PageInner>
        <video width="100%" height="100%" autoPlay muted loop>
            <source src={serviceVideo} type="video/mp4" />
        </video>
        <CommonStyles.BgBlur></CommonStyles.BgBlur>
    </CommonStyles.PageInner>
    
    { children }
</>
  )
};

export default Layout;
