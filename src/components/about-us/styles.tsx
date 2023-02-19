import styled from "@emotion/styled";
import { COLOR, MEDIA } from "../../constants";

export const SubPageScrollbar = styled.div`
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

export const AboutUsContent = styled.div`
  width: 1200px;
  margin: auto;
  p {
    text-align: center;
    font-size: 20px;
    line-height: 60px;
    font-weight: 900;
    color: #232323;
  }
  @media (max-width: 1399px) {
    width: 1000px;
  }
  @media (max-width: 1019px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const CommonHeading = styled.div`
  text-align: center;
  width: 100%;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 50px;
  line-height: 80px;
  font-weight: 900;
  color: ${COLOR.base};
  text-transform: uppercase;
  @media (max-width: 1400px) {
    font-size: 40px;
    line-height: 60px;
  }
  /* @media (max-width: 767px) {
    font-size: 35px;
  } */
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

export const AboutUsTop = styled.div`
  display: flex;
  justify-content: space-between;
  /* @media (max-width: 767px) {
    display: block;
  } */
`;

export const AboutUsInfo = styled.div`
  flex: 1;
`;

export const Item = styled.div`
  padding: 12px 0;
  display: flex;
  border-bottom: solid 1px #eeeeee;
  dt {
    font-weight: bold;
    font-size: 16px;
    width: 120px;
    flex: 0 0 120px;
  }
  dd {
    font-size: 16px;
  }
  @media (max-width: 1399px) {
    dt,
    dd {
      font-size: 14px;
    }
  }
  /* @media (max-width: 767px) {
    dt,
    dd {
      font-size: 16px;
      padding-left: 10px;
    }
  } */
`;

export const ImageWrapper = styled.div`
  padding-left: 80px;
  img {
    /* height: 345px ; */
    @media (max-width: 1019px) {
      /* height: 300px; */
    }

    @media (max-width: 1019px) {
      /* width: 48vw;
    height: auto !important; */
    }
  }
`;

export const DivH20 = styled.div`
  height: 20px;
`;

export const AboutMap = styled.div`
  width: 1200px;
  flex: 1;
  @media (max-width: 1399px) {
    width: 1000px;
  }
`;
