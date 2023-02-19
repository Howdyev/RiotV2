import styled from "@emotion/styled";
import { COLOR, MEDIA } from "../../constants";
import blurImage from "../../images/blur.png";

export const BgBlur = styled.div`
    background-image: url(${blurImage});
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    background-color: rgba(0,0,0,0.6);
`;

export const BackgroundLine = styled.div`
  transform: rotate(-15deg);
  transform-origin: left bottom;
  position: absolute;
  width: 4px;
  height: 110vh;
  left: 60%;
  top: -5vh;
  background-color: ${COLOR.base};
  z-index: 0;
  &:before {
    content: "";
    background-color: #ffffff;
    height: 100%;
    width: 2px;
    position: absolute;
    left: 20px;
  }
  &:after {
    content: "";
    background-color: #ffffff;
    height: 100%;
    width: 2px;
    position: absolute;
    right: 20px;
  }
`;

export const SubPageScrollbar = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

export const PageScrollbar = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

export const PageBack = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const PageInner = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  & video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
`;


export const SubPage = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${MEDIA.sp} {
    background-color: #fff;
  }
`;

export const SubPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding-top: 90px;
  padding-bottom: 60px;
  position: relative;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding-top: 90px;
  padding-bottom: 60px;
  position: relative;
`;

export const Heading = styled.div`
  text-align: center;
  width: 100%;
  overflow: hidden;
`;

export const Par = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 60px;
  font-weight: 900;
  color: #232323;
  span {
    padding: 0 20px;
    font-size: 30px;
    line-height: 48px;
    font-weight: 900;
    color: #093762;
    border-top: solid 1px #093762;
  }
`;

export const FrontPage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`

export const FrontContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 20px;
`