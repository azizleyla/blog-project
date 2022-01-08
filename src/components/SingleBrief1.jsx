import React from "react";
import styled from "styled-components";
import { ReadMoreBtn } from "./Button";

const SingleBrief1 = ({ img, description, title, date }) => {
  return (
    <SingleBrief1Container>
      <div className="card-header">
        <img src={img} alt="img" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <p>{date}</p>
        <ReadMoreBtn>Read More</ReadMoreBtn>
      </div>
    </SingleBrief1Container>
  );
};

const SingleBrief1Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(192, 189, 189, 0.25);
  border-radius: 5px;
  position: relative;
  padding-bottom: 1rem;
  .card-header {
    img {
      width: 100%;
    }
  }
  .card-body {
    padding: 0 1.65rem;
    margin: 1.5rem 0;

    h3 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #4a4a4a;
      margin-bottom: 1.5rem;
    }
    p {
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #9b9b9b;
      margin-bottom: 2.2rem;
    }
  }
  .card-footer {
    padding: 0 1.65rem;

    position: absolute;
    width: 100%;
    display: flex;
    bottom: -0rem;
    justify-content: space-between;
    p {
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #4a4a4a;
    }
  }
`;
export default SingleBrief1;
