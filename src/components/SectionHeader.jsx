import React from "react";
import styled from "styled-components";
import { SeeAllBtn } from "./Button";

const SectionHeader = ({ title, section }) => {
  return (
    <SectionHeaderContainer section={section}>
      <div className="text">
        <h3>{title}</h3>
      </div>
      <SeeAllBtn>See All</SeeAllBtn>
    </SectionHeaderContainer>
  );
};
const SectionHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  width: ${(props) => (props.section === "opinion" ? "68%" : "100%")};
  @media (max-width: 992px) {
    width: 100%;
  }
  h3 {
    font-weight: bold;
    font-size: 36px;
    line-height: 150%;
    color: #4a4a4a;
  }
`;
export default SectionHeader;
