import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import HearFromUs from "../components/HearFromUs";
import RecentPost from "../components/RecentPost";
import ResearchCenter from "../components/ResearchCenter";

const TeamMemberContainer = styled.div`
  margin-top: 50px;
  margin-right: 50px;
  width: 70%;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #4a4a4a;
  }
  .team-member-info {
    display: flex;
    margin-bottom: 8rem;
    .member-img {
      width: 270px;
      height: 270px;
      border-radius: 8px;
    }
  }
  .detail-container {
    margin-left: 20px;
    padding-top: 40px;
    h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 150%;
      color: #4a4a4a;
    }
    h4 {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      color: #4a4a4a;
    }
    h5 {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      color: #4a4a4a;
      margin-top: 20px;
    }
  }
  .bio-container {
    h6 {
      font-weight: bold;
      font-size: 16px;
      line-height: 150%;
      color: #9b9b9b;
    }
  }
`;

function TeamMemberPage({ currentMember }) {
  return (
    <>
      <Wrapper className="container">
        <TeamMemberContainer>
          <div className="team-member-info">
            <img className="member-img" src={currentMember.img} alt="" />
            <div className="detail-container">
              <h3>{currentMember.name}</h3>
              <div className="bio-container">
                <h6>Biograhpy</h6>
              </div>
              <h4>
                Director of Middle Eastern Studies Center (ORSAM) in
                Ankara.
              </h4>
              <h5>
                Professor of Political Sociology in Istanbul University.
              </h5>
            </div>
          </div>
          <p>
            Dr. Ahmet Uysal is a political sociologist interested in
            studying Arab Affairs and Turkish-Arab relations. Dr. Uysal
            graduated from the Middle Technical University's sociology
            department. He received his master's and doctoral degree in the
            Southern Illinois University, USA. Previously he taught at the
            Dumlupinar and Marmara Universities. Currently he is teaching
            in Istanbul University’s International Relations Department.
            Dr. Uysal lived in Egypt as the AUC research fellow in 2010 and
            he has recently published a book on Turkey’s Image in Egypt
            before and after the Revolution in Turkish.
          </p>
          <p>
            Dr. Ahmet Uysal has coordinated several Arab-Turkish Congresses
            of Social Sciences (ATCOSS) since 2010 and wishes to advance
            academic cooperation among Turkey and the Arab world. He
            follows the developments in Turkey and the Arab world and works
            to improve understanding and cooperation at academic and social
            levels. He is the author of another book named Sociology of
            Social Movements. Along with his native Turkish, he speaks
            English, Arabic and some French. He writes and comments on
            Turkish and Middle Eastern affairs in national and
            international platforms including the Academia and the media
            outlets such Aljazeera, BBC and Al-Arabia.
          </p>
        </TeamMemberContainer>
        <div>
          <RecentPost />
          <HearFromUs />
        </div>
      </Wrapper>
      <ResearchCenter />
      <Footer />
    </>
  );
}
const Wrapper = styled.div`
  display: flex;
  margin-top: 5rem;
`;

export default TeamMemberPage;
