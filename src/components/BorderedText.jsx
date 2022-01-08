import React from "react";
import styled from "styled-components";

const BorderedText = ({content}) => {
  return (
    <Wrapper>
          <h3>{content}</h3>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-bottom: 3rem;
  h3 {
    font-weight: bold;
    font-size: 28px;
    line-height: 150%;
    color: #4a4a4a;
    border-bottom: 3px solid #3781df;
  }
`;

export default BorderedText;
