import styled from "@emotion/styled";
import { SubPage } from "components/common-styles";
import { COLOR, MEDIA } from "../../constants";
import videoBlur from "../../images/blur.png";

export const VideoBlur = styled.div`
  background-image: url(${videoBlur});
`;

export const ServiceContent = styled.div`
  width: 1400px;
  margin: auto;
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

export const ServiceList = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    display: block;
  }
`;

export const SingleService = styled.div`
  flex: 0 0 33.33%;
  padding: 13px;
  @media (max-width: 767px) {
    padding: 0;
    margin: 30px 0;
  }
`;

export const ServiceImg = styled.div`
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 10px;
  @media (max-width: 1399px) {
    border-radius: 6px;
  }
`;

export const ServiceText = styled.div`
  h3 {
    font-size: 20px;
    line-height: 30px;
    padding-left: 0px;
    color: #fff;
  }
  p {
    font-size: 16px;
    line-height: 1.6em;
    color: #fff;
    font-weight: 500;
  }
  span {
    font-size: 24px;
    line-height: 60px;
    font-weight: 900;
    background-color: #fff;
    color: #000;
    padding: 6px 8px;
    border-radius: 2px;
    margin-right: 16px;
  }
  @media (max-width: 1399px) {
    h3 {
      font-size: 16px;
      line-height: 20px;
    }
    span {
      font-size: 16px;
      line-height: 40px;
      padding: 4px 6px;
    }
    p {
      font-size: 14px;
    }
  }
`;
