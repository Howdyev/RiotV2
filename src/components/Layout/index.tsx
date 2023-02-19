import React, { FunctionComponent, useContext, useRef, useEffect } from "react";
import { navigate } from "gatsby";
import { BackgroundLine } from "components/common-styles";
import "../../styles/global.css";
import * as CommonStyles from "components/common-styles";
import bannerVideo from "../../images/banner.mp4";
import serviceVideo from "../../images/service.mp4";
import { GlobalContext } from "components/context/GlobalContext"
import { ANIEFFECT } from "../../constants/"
import gsapWithCss from 'gsap'

const Layout = ({children}) => {
    const { openMenu, setOpenMenu } = useContext(GlobalContext);
    var transitioning = false;
    const bannerRef = useRef()
    const serviceRef = useRef()
    const aboutusRef = useRef()
    const bgList = [bannerRef, serviceRef, aboutusRef]
    const inBannerRef = useRef()
    const inServiceRef = useRef()
    const inAboutusRef = useRef()
    const bgInnerList = [inBannerRef, inServiceRef, inAboutusRef]
    const _onWheel = (e) => {
        if(transitioning) return;
        transitioning = true;

        // setOpenMenu(!openMenu)
        // console.log(openMenu)

        // gsap.timeline()
        //     .set(bannerRef.current, {rotation: 0})
        //     .to(bannerRef.current, {rotation: 360});
        if(bannerRef.current) {
            gsapWithCss.timeline()
            .set(bannerRef.current, {
                transform: "translate3d(0, 0, 0)"})
            .to(bannerRef.current, {
                transform: "translate3d(-20%, -100%, 0)",
                duration: ANIEFFECT.max_page_speed,
                delay: 0.1,
            });
        }
        if(inBannerRef.current) {
            gsapWithCss.timeline()
                .set(inBannerRef.current, {transform: "scale(1, 1)"})
                .to(inBannerRef.current, {
                    transform: "scale(" + ANIEFFECT.max_inner_scale + "," + ANIEFFECT.max_inner_scale + ")",
                    duration: ANIEFFECT.max_page_speed,
                    delay: 0,
                });
        }

        if(serviceRef.current){
            gsapWithCss.timeline()
                .set(serviceRef.current, {transform: "translate3d(20%, 100%, 0)"})
                .to(serviceRef.current, {
                    transform: "translate3d(0, 0, 0)",
                    duration: ANIEFFECT.max_page_speed*0.8,
                    delay: 0.3,
                });
        }
        if(inServiceRef.current) {
            gsapWithCss.timeline()
                .set(inServiceRef.current, {transform: "scale("+ANIEFFECT.max_inner_scale+", "+ANIEFFECT.max_inner_scale+")"})
                .to(inServiceRef.current, {
                    transform: "scale(1,1)",
                    duration: ANIEFFECT.max_page_speed*0.8,
                    delay: 0.5,
                });
        }
        setTimeout(() => {
            transitioning = false;
            setOpenMenu(!openMenu)
            // navigate("/service/")
        }, 3000);
    }
    useEffect(() => {
        console.log("rest layout");
        let curPageNo = 0;
        bgList.forEach((v, i)=>{
            if(i==curPageNo) {
                gsapWithCss.set(v.current, {transform: "translate3d(0, 0, 0)"})
            }
            else {
                gsapWithCss.set(v.current, {transform: "translate3d(-100%, -100%, 0)"})
            }
        })
    }, [])
    return (
        <div onClick={_onWheel}>
            {/* <HeaderLogo /> */}
            <BackgroundLine />
            <CommonStyles.BackgroundSet>
                <CommonStyles.PageBack ref={bannerRef}>
                    <CommonStyles.PageInner ref={inBannerRef}>
                        <video width="100%" height="100%" autoPlay muted loop>
                            <source src={bannerVideo} type="video/mp4" />
                        </video>
                        <CommonStyles.BgBlur></CommonStyles.BgBlur>
                    </CommonStyles.PageInner>
                </CommonStyles.PageBack>
                <CommonStyles.PageBack ref={serviceRef}>
                    <CommonStyles.PageInner ref={inServiceRef}>
                        <video width="100%" height="100%" autoPlay muted loop>
                            <source src={serviceVideo} type="video/mp4" />
                        </video>
                        <CommonStyles.BgBlur></CommonStyles.BgBlur>
                    </CommonStyles.PageInner>
                </CommonStyles.PageBack>
                <CommonStyles.PageBack ref={aboutusRef}>
                    <CommonStyles.PageInner ref={inAboutusRef}>
                        <CommonStyles.BgWhite></CommonStyles.BgWhite>
                    </CommonStyles.PageInner>
                </CommonStyles.PageBack>
            </CommonStyles.BackgroundSet>
            
            { children }
        </div>
    )
};

export default Layout;


// const FrontWrapper = ({children}) => {
//   const _onWheel = (e) => {
    
//   }

//   return (
//     <div onWheel={_onWheel}>
//       { children }
//     </div>
//   )
// }