import React from "react";
import ResearchCenter from "../components/ResearchCenter";
import Footer from "../components/Footer";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import team1 from "../images/team1.png";
import RecentPost from "../components/RecentPost";
import HearFromUs from "../components/HearFromUs";
import SingleMember from "../components/SingleMember";
import { teamMembers } from "../utils/contants";
import TwitterBox from "../components/TwitterBox";
import { Link } from "react-router-dom";

const Team = ({ currentMember, setCurrentMember }) => {
  return (
    <Wrapper>
      <div className="team-container container">
        <div className="team-container-left">
          <h1>Our Team</h1>
          <p>
            Definitions of “military doctrine” vary according to schools of
            military thought, as well as the nature of the national
            security threats a country faces. The most concise definition
            of military doctrine can be made as “the set of fundamental
            principles that guide a country's armed forces in achieving its
            national security goals”. In other words.
          </p>
          <div className="team-boxes">
            {teamMembers.map((member) => (
              <SingleMember
                setCurrentMember={setCurrentMember}
                member={member}
                key={member.id}
                {...member}
              />
            ))}
          </div>
        </div>
        <div className="team-container-right">
          <RecentPost />
          <HearFromUs />
          <TwitterBox />
        </div>
      </div>
      <ResearchCenter />
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 5rem;

  .team-container {
    display: flex;
    gap: 2rem 5rem;
    padding: 10rem 0;
  }
  .team-container-left {
    width: 60%;

    h1 {
      font-weight: bold;
      font-size: 48px;
      line-height: 150%;
      color: #4a4a4a;
      margin-bottom: 2rem;
    }
    p {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #4a4a4a;
    }
    .team-boxes {
      margin-top: 5rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem 5.2rem;
    }
  }
  .team-container-right {
    display: flex;
    flex-direction: column;
    gap: 6rem 2rem;
  }
`;

export default Team;
