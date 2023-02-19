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
    const frontRef = useRef()
    var curPageNo = 0;
    const urls = ["/", "/service", "/about-us"];
    const _timeToLoadPage = () => {
        console.log("hoiasjdofjaosfijaosfjdoij")
    }
    const _onWheel = (e) => {
        if(transitioning) return;
        console.log(bannerRef.current)
        transitioning = true;
        curPageNo = openMenu;
        console.log("called?")
        if(curPageNo < bgList.length-1) {
            if(bgList[curPageNo].current) {
                gsapWithCss.timeline()
                .set(bgList[curPageNo].current, {
                    transform: "translate3d(0, 0, 0)"})
                .to(bgList[curPageNo].current, {
                    transform: "translate3d(-20%, -100%, 0)",
                    duration: ANIEFFECT.max_page_speed,
                    delay: 0.1,
                });
            }
            if(bgInnerList[curPageNo].current) {
                gsapWithCss.timeline()
                    .set(bgInnerList[curPageNo].current, {transform: "scale(1, 1)"})
                    .to(bgInnerList[curPageNo].current, {
                        transform: "scale(" + ANIEFFECT.max_inner_scale + "," + ANIEFFECT.max_inner_scale + ")",
                        duration: ANIEFFECT.max_page_speed,
                        delay: 0,
                    });
            }

            if(bgList[curPageNo+1].current){
                gsapWithCss.timeline()
                    .set(bgList[curPageNo+1].current, {transform: "translate3d(20%, 100%, 0)"})
                    .to(bgList[curPageNo+1].current, {
                        transform: "translate3d(0, 0, 0)",
                        duration: ANIEFFECT.max_page_speed*0.8,
                        delay: 0.3,
                    });
            }
            if(bgInnerList[curPageNo+1].current) {
                gsapWithCss.timeline()
                    .set(bgInnerList[curPageNo+1].current, {transform: "scale("+ANIEFFECT.max_inner_scale+", "+ANIEFFECT.max_inner_scale+")"})
                    .to(bgInnerList[curPageNo+1].current, {
                        transform: "scale(1,1)",
                        duration: ANIEFFECT.max_page_speed*0.8,
                        delay: 0.5,
                        onComplete: _timeToLoadPage
                    });
            }
            if(frontRef.current) {
                gsapWithCss.timeline()
                    .set(frontRef.current, {opacity: 1})
                    .to(frontRef.current, {
                        opacity: 0,
                        duration: 0.5,
                        delay: 0,
                    });
            }
        }
        setTimeout(() => {
            navigate(navigate(urls[curPageNo+1]))
            if(frontRef.current) {
                gsapWithCss.timeline()
                    .set(frontRef.current, {opacity: 0})
                    .to(frontRef.current, {
                        opacity: 1,
                        duration: 2,
                        delay: 0,
                    });
            }
        }, 1000);
        setTimeout(() => {
            transitioning = false;
            setOpenMenu(openMenu+1)
        }, 2000);
        
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
            
            <CommonStyles.FrontWrap ref={frontRef}>
                { children }
            </CommonStyles.FrontWrap>
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