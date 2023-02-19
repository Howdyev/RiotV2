/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */
import React from "react";
import GlobalContextProvider from "./src/components/context/GlobalContext"
import "prismjs/themes/prism-tomorrow.css";

export const wrapRootElement = ({ element }) => (
    <GlobalContextProvider>{element}</GlobalContextProvider>
)