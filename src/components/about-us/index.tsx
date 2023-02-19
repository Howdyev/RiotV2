import * as Styles from "./styles";
import { StaticImage } from "gatsby-plugin-image";
import { useMatchMedia } from "hooks/use-match-media";
import { ABOUT } from "../../constants";
// import SubHeader from "components/Common/SubHeader";
import * as CommonStyles from "components/common-styles";
import { Link } from "gatsby";

export const AboutUs = () => {
  const { isPcSize } = useMatchMedia();
  return (
    <CommonStyles.SubPageScrollbar>
      {isPcSize && (
        <CommonStyles.PageBack>
          <CommonStyles.PageInner></CommonStyles.PageInner>
        </CommonStyles.PageBack>
      )}
      <CommonStyles.SubPage>
        <CommonStyles.SubPageContainer>
          <Styles.AboutUsContent>
            <CommonStyles.Heading>
              <div>
                <Styles.Title>About US</Styles.Title>
                <Styles.Par>
                  <span>&nbsp;</span>
                </Styles.Par>
              </div>
            </CommonStyles.Heading>
            Check out my <Link to="/service-a">blog</Link>!
            <Styles.AboutUsTop>
              <Styles.AboutUsInfo>
                {ABOUT.map((v, i) => {
                  return (
                    <Styles.Item key={i}>
                      <dt>{v.dt}</dt>
                      <dd>{v.dd}</dd>
                    </Styles.Item>
                  );
                })}
              </Styles.AboutUsInfo>
              <Styles.ImageWrapper className="aboutus_img front_el">
                <StaticImage
                  src="../../images/riot-company.jpg"
                  alt="オフィス画像"
                  placeholder="blurred"
                  loading="eager"
                  height={300}
                />
              </Styles.ImageWrapper>
            </Styles.AboutUsTop>
          </Styles.AboutUsContent>
          <Styles.Div>&nbsp;</Styles.Div>
          <Styles.AboutMap>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.093646211283!2d139.71497861561133!3d35.65006433928735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b6c86608641%3A0x3b372ae7735abd98!2z5pel5pys44CB44CSMTUwLTAwMTIg5p2x5Lqs6YO95riL6LC35Yy65bqD5bC-77yS5LiB55uu77yR77yT4oiS77yW!5e0!3m2!1sja!2sus!4v1675668610460!5m2!1sja!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
            />
          </Styles.AboutMap>
        </CommonStyles.SubPageContainer>
      </CommonStyles.SubPage>
    </CommonStyles.SubPageScrollbar>
  );
};
