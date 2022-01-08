import React from "react";
import styled from "styled-components";
import { briefs2 } from "../utils/contants";
import SectionHeader from "./SectionHeader";
import SingleBrief2 from "./SingleBrief2";

const PolicyBrief2 = () => {
  return (
    <Wrapper className="container">
      <SectionHeader title="Policiy Brief" />
      <PoliciyBriefContainer className="container">
        {briefs2.map((brief) => (
          <SingleBrief2 ket={brief.id} {...brief} />
        ))}
      </PoliciyBriefContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10rem 0;
  @media (max-width: 1200px) {
    padding: 10rem 1rem;
  }
`;
const PoliciyBriefContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 5rem;
`;
export default PolicyBrief2;
