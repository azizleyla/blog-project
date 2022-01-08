import React from "react";
import Footer from "../components/Footer";
import Opinion from "../components/Opinion";
import PolicyBrief1 from "../components/PolicyBrief1";
import PolicyBrief2 from "../components/PolicyBrief2";
import PostContainer from "../components/PostContainer";
import ResearchCenter from "../components/ResearchCenter";

const Home = () => {
  return (
    <div>
      <PostContainer />
      <Opinion />
      <PolicyBrief1 />
      <PolicyBrief2 />
      <ResearchCenter />
      <Footer />
    </div>
  );
};

export default Home;
