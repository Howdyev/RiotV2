import React, { FunctionComponent } from "react";
import { StaticImage } from 'gatsby-plugin-image';
import  styled from '@emotion/styled'
import GlobalStyles from '../../styles/GlobalStyles'
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge"

const GbiBridged = () => {
    const { backgroundImage123 } = useStaticQuery(
        graphql`
            query {
                backgroundImage123: file(relativePath: {eq: "banner.jpg"}) {
                    id
                    childImageSharp {
                      gatsbyImageData(
                        width: 2000, 
                        quality: 50,  
                        webpOptions: {quality: 70})
                    }
                }
            }
        `
    )

    const pluginImage = getImage(backgroundImage123)
    
    return(
        <BgImage image={pluginImage} >
            Long live
        </BgImage>
    )
}






const Layout: FunctionComponent = function ({children}) {
    return(
<>
    <GlobalStyles />   
    {/* <BackgroundWrapper>
        <StaticImage src={"../../images/banner.jpg"} alt='Banner' />
    </BackgroundWrapper> */}
    <GbiBridged />
    {children}

</>
    )
}

export default Layout;
