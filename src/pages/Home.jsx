import React from "react";
import Layout from "../components/layout/Layout";
import Opinion from "../components/Opinion";
import PolicyBrief1 from "../components/PolicyBrief1";
import PolicyBrief2 from "../components/PolicyBrief2";
import PostContainer from "../components/PostContainer";

const Home = () => {
  return (
    <Layout>
      <PostContainer />
      <Opinion />
      <PolicyBrief1 />
      <PolicyBrief2 />
    </Layout>
  );
};

export default Home;
