import React from "react";
import styled from "styled-components";

const TwitterBox = () => {
  return (
    <Wrapper>
      <div className="box-header"></div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  background: rgba(217, 234, 255, 0.5);
  border-radius: 16px;
  overflow: hidden;
  height: 429px;

  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 776px) {
    width: 90%;
    margin-left: 0;
    margin-top: 2rem;
  }
  .box-header {
    background: #3781df;
    height: 81px;
  }
`;
export default TwitterBox;
