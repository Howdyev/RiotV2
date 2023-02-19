import { FunctionComponent, useEffect, useContext, useRef } from "react";
import * as Styles from "./styles";
import * as CommonStyles from "components/common-styles";
import { GlobalContext } from "components/context/GlobalContext"
import gsapWithCss from 'gsap'

const Top: FunctionComponent = function () {
  const { openMenu, setOpenMenu } = useContext(GlobalContext);
  const pageRef = useRef()
  useEffect(() => {
  }, [])

  return (
    <CommonStyles.FrontPage ref={pageRef}>
        <Styles.BannerFrontContainer>
            <Styles.BannerTitle >挑戦し続ける会社に</Styles.BannerTitle>
        </Styles.BannerFrontContainer>
    </CommonStyles.FrontPage>
  )
};

export default Top;

// const FrontWrapper = ({children}) => {
//   const _onWheel = (e) => {
    
//   }

//   return (
//     <div onWheel={_onWheel}>
//       { children }
//     </div>
//   )
// }