import { FunctionComponent } from "react";
import * as Styles from "./styles";
import * as CommonStyles from "components/common-styles";

const Top: FunctionComponent = function () {
  return (
    <CommonStyles.FrontPage>
        <Styles.BannerFrontContainer>
            <Styles.BannerTitle>挑戦し続ける会社に</Styles.BannerTitle>
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