import React from "react";
import styled from "styled-components";
import BorderedText from "./BorderedText";

const RecentPost = () => {
  return (
    <Wrapper>
      <BorderedText content="Recent Post" />
      <div className="posts">
        <h5>A New Chapter</h5>
        <span>March 15,2021</span>
      </div>
      <div className="posts">
        <h5>How do I delete an Organization from Blog?</h5>
        <span>March 15,2021</span>
      </div>
      <div className="posts">
        <h5>How do I delete an Organization from Blog?</h5>
        <span>March 15,2021</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .posts {
    border-bottom: 1px solid #bdbdbd;
    padding: 1.5rem 0;
    margin-bottom: 1.5rem;
    h5 {
      font-weight: bold;
      font-size: 16px;
      line-height: 150%;
      color: #3781df;
    }
    span {
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      color: #4a4a4a;
      margin-top: 0.5rem;
      display: inline-block;
    }
  }
`;
export default RecentPost;
