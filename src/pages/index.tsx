import React, { FunctionComponent, useEffect } from "react";
import Top from "components/Top";
const IndexPage: FunctionComponent = function () {

  useEffect(() => {
    console.log("Index useEffect");
  });
  return <Top />
};

export default IndexPage;
