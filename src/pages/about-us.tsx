import React, { FunctionComponent, useEffect } from "react";
import AboutUs from "components/about-us";
const AboutUsPage: FunctionComponent = function () {

  useEffect(() => {
    console.log("Index useEffect");
  });
  return <AboutUs />
};

export default AboutUsPage;
