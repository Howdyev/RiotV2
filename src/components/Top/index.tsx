import { FunctionComponent, useContext, useRef } from "react";
import * as Styles from "./styles";
import * as CommonStyles from "components/common-styles";
import { GlobalContext } from "components/context/GlobalContext"
import gsapWithCss from 'gsap'

const Top: FunctionComponent = function () {
  const { openMenu, setOpenMenu } = useContext(GlobalContext);
  const frontEl1 = useRef()  
  return (
    <CommonStyles.FrontPage>
        <Styles.BannerFrontContainer>
            <Styles.BannerTitle ref={frontEl1}>挑戦し続ける会社に</Styles.BannerTitle>
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