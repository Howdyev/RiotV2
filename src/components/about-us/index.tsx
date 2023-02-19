import * as Styles from "./styles";
import { useMatchMedia } from "hooks/use-match-media";
import { ABOUT } from "../../constants";
// import SubHeader from "components/Common/SubHeader";
import * as CommonStyles from "components/common-styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { useEffect } from "react";

const AboutUs = () => {
  const { isPcSize } = useMatchMedia();
  const imagesData = useStaticQuery(
    graphql`
      query {
        allFile {
          edges {
            node {
              id
              childImageSharp {
                gatsbyImageData
              }
              name
            }
          }
        }
      }
    `
  );
  const getImageNode = (fileName: string) => {
    const filteredNodes = imagesData.allFile.edges.filter((value: any) => value.node.name == fileName);
    return filteredNodes[0].node
  }
  const officeImage = getImage(getImageNode(ABOUT.officeImage.imageFileName));
  useEffect(() => {
    console.log("AboutUs useEffect");
  });
  return (
    <CommonStyles.PageScrollbar>
      <CommonStyles.SubPage>
        <CommonStyles.PageContainer>
          <Styles.AboutUsContent>
            <CommonStyles.Heading>
              <div>
                <Styles.Title>About US</Styles.Title>
                <Styles.Par>
                  <span>&nbsp;</span>
                </Styles.Par>
              </div>
            </CommonStyles.Heading>
            <Styles.AboutUsTop>
              <Styles.AboutUsInfo>
                {ABOUT.companyInfo.map((v, i) => {
                  return (
                    <Styles.Item key={i}>
                      <dt>{v.dt}</dt>
                      <dd>{v.dd}</dd>
                    </Styles.Item>
                  );
                })}
              </Styles.AboutUsInfo>
              <Styles.ImageWrapper className="aboutus_img front_el">
                {officeImage &&
                  <GatsbyImage
                    image={officeImage}
                    alt={ABOUT.officeImage.imageAlt}
                    loading="eager"
                  />
                }
              </Styles.ImageWrapper>
            </Styles.AboutUsTop>
          </Styles.AboutUsContent>
          <Styles.DivH20>&nbsp;</Styles.DivH20>
          <Styles.AboutMap>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.093646211283!2d139.71497861561133!3d35.65006433928735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b6c86608641%3A0x3b372ae7735abd98!2z5pel5pys44CB44CSMTUwLTAwMTIg5p2x5Lqs6YO95riL6LC35Yy65bqD5bC-77yS5LiB55uu77yR77yT4oiS77yW!5e0!3m2!1sja!2sus!4v1675668610460!5m2!1sja!2sus"
              width="100%"
              height="300px"
              style={{ border: 0 }}
            />
          </Styles.AboutMap>
        </CommonStyles.PageContainer>
      </CommonStyles.SubPage>
    </CommonStyles.PageScrollbar>
  );
};

export default AboutUs