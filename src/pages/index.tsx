import React, { FunctionComponent } from "react";
import { StaticImage } from 'gatsby-plugin-image';
import { gIsMobile } from '../globals/Globals'
import Layout from "components/Layout";

const IndexPage: FunctionComponent = function () {
    console.log(gIsMobile)
    return (
<>
        <Layout>
            <h1>Hello</h1>
        </Layout>

</>
    );
};

export default IndexPage;
