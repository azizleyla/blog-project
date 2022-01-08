import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import HearFromUs from "../components/HearFromUs";
import RecentPost from "../components/RecentPost";
import ResearchCenter from "../components/ResearchCenter";
import TwitterBox from "../components/TwitterBox";

import { blogs } from "../utils/contants";

const Wrapper = styled.div`
  margin-top: 50px;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 150%;
    color: #4a4a4a;
  }
  .opinions-row {
    display: flex;
    gap: 5.2rem;
  }
  .opinions {
    width: 60%;
  }
  .opinion {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    margin-top: 50px;
    img {
      height: 275px;
      width: 275px;
      border-radius: 8px;
      margin-right: 20px;
    }
    &-content {
      padding-top: 20px;
      h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #4a4a4a;
      }
      h5 {
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #939393;
        margin-top: 10px;
        margin-bottom: 25px;
      }
      p {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        color: #4a4a4a;
      }
    }
  }
`;

function Opinion() {
  return (
    <>
      <Wrapper className="container">
        <h2>Opinion</h2>
        <div className="opinions-row">
          <div className="opinions">
            {blogs.map((blog) => (
              <div className="opinion">
                <img src={blog.img} alt="" />
                <div className="opinion-content">
                  <h3>{blog.title}</h3>
                  <h5>{blog.date}</h5>
                  <p>{blog.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <RecentPost />
            <HearFromUs />
            <TwitterBox />
          </div>
        </div>
      </Wrapper>
      <ResearchCenter />

      <Footer />
    </>
  );
}

export default Opinion;
