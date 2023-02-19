import React, { FunctionComponent } from "react";
import Layout from "components/Layout";
import { Service } from "components/service";

const ServicePage: FunctionComponent = function () {

  return (
    <>
      <Layout video={2}>
        <Service />
      </Layout>
    </>
  );
};

export default ServicePage;