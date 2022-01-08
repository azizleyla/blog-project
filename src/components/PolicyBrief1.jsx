import React from "react";
import styled from "styled-components";
import { briefs1 } from "../utils/contants";
import SectionHeader from "./SectionHeader";
import SingleBrief1 from "./SingleBrief1";

const PolicyBrief1 = () => {
  return (
    <Wrapper className="container">
      <SectionHeader title="Policy Brief" />
      <PolicyBrief1Container className="container">
        {briefs1.map((brief1) => (
          <SingleBrief1 key={brief1.id} {...brief1} />
        ))}
      </PolicyBrief1Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-top: 10rem;
  @media (max-width: 1200px) {
    padding: 10rem 1rem;
  }
`;
export const PolicyBrief1Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 3rem 5.7rem;
`;
export default PolicyBrief1;
