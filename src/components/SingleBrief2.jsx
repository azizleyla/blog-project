import React from "react";
import styled from "styled-components";

const SingleBrief2 = ({ date, text }) => {
  return (
    <SingleBriefContainer>
      <div className="date-container">
        <p>
          {date}
          <span>/March</span>
        </p>
      </div>
      <div className="text-container">
        <p>{text}</p>
      </div>
    </SingleBriefContainer>
  );
};

const SingleBriefContainer = styled.div`
  padding: 5.3rem 2.3rem;
  background-color: #3781df;
  border-radius: 8px;
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #2e67b0;
  }
  .date-container {
    p {
      font-weight: bold;
      font-size: 48px;
      line-height: 59px;
      color: #ffffff;
      span {
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        color: #d9eaff;
      }
    }
  }
  .text-container {
    p {
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #fafafa;
      margin-top: 2.5rem;
    }
  }
`;

export default SingleBrief2;
