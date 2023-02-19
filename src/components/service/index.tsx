import React from "react";
import { useMatchMedia } from "hooks/use-match-media";
import * as CommonStyles from "components/common-styles";
import { SERVICE } from "../../constants/"
import * as Styles from "components/service/styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

export type ScreenInfoType = {
  order: number;
  slug: String;
  title: String;
  theme: String;
};

export type ScreenProps = {
  screenInfo: ScreenInfoType;
};

export const Service = () => {
  const { isSpSize } = useMatchMedia();
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

  return (
    <>
      <CommonStyles.PageScrollbar>
        <CommonStyles.PageContainer>
          <Styles.ServiceContent>
            <CommonStyles.Heading>
              <div>
                <Styles.Title>SERVICE</Styles.Title>
                <Styles.Par>
                  <span>&nbsp;</span>
                </Styles.Par>
              </div>
            </CommonStyles.Heading>
            <Styles.ServiceList>
              {SERVICE.map((v, i) => {
                const image = getImage(getImageNode(v.imageFileName));
                return (
                  <Styles.SingleService key={i}>
                    <Styles.ServiceImg>
                      {image &&
                      <GatsbyImage
                        image={image}
                        alt={v.alt}
                        loading="eager"
                      />}
                    </Styles.ServiceImg>
                    <Styles.ServiceText>
                      <h3>
                        <span>{v.number}</span>
                        {v.title}
                      </h3>
                      <p>{v.description}</p>
                    </Styles.ServiceText>
                  </Styles.SingleService>
                );
              })}
            </Styles.ServiceList>
          </Styles.ServiceContent>
        </CommonStyles.PageContainer>
      </CommonStyles.PageScrollbar>
    </>
  );
};