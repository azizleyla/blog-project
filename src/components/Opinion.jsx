import React from "react";
import styled from "styled-components";
import { briefs1 } from "../utils/contants";
import SectionHeader from "./SectionHeader";
import SingleBrief1 from "./SingleBrief1";
import TwitterBox from "./TwitterBox";

const Opinion = () => {
  return (
    <Wrapper className="container">
      <SectionHeader
        section="opinion"
        className="opinion-header"
        title="Opinion"
      />
      <div className="opinion-row">
        <OpinionContainer>
          <div className="opinion-left">
            {briefs1.slice(0, 2).map((brief1) => (
              <SingleBrief1
                key={brief1.title}
                title={brief1.title}
                img={brief1.img}
                date={brief1.date}
                description={brief1.description}
              />
            ))}
          </div>
        </OpinionContainer>
        <div className="opinion-right">
          <TwitterBox />
        </div>
      </div>
    </Wrapper>
  );
};
const OpinionContainer = styled.div`
  width: 70%;
`;

const Wrapper = styled.div`
  margin-top: 10rem;
  @media (max-width: 1200px) {
    padding: 0 1.5rem;
  }

  .opinion-row {
    display: flex;
    gap: 2rem 5.2rem;
    @media (max-width: 992px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .opinion-left {
    display: grid;
    gap: 2rem 5rem;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    @media (max-width: 1200px) {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
  }
  .opinion-right {
    width: 30%;
  }
`;
export default Opinion;
