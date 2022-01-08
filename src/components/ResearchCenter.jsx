import React from "react";
import styled from "styled-components";
import logo2 from "../images/logo2.png";
import facebookIcon from "../images/facebook.png";
import telegramIcon from "../images/telegram.png";
import twitterIcon from "../images/twitter.png";
import whatsappIcon from "../images/whatsapp.png";
import linkedinIcon from "../images/linkedin.png";
import { Link } from "react-router-dom";
const socialMediaBtns = [
  {
    label: "telegram",
    path: "/",
    icon: telegramIcon,
  },
  {
    label: "facebook",
    path: "/",
    icon: facebookIcon,
  },
  {
    label: "twitter",
    path: "/",
    icon: twitterIcon,
  },
  {
    label: "whatsapp",
    path: "/",
    icon: whatsappIcon,
  },
  {
    label: "linkedin",
    path: "/",
    icon: linkedinIcon,
  },
];

const ResearchCenter = () => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={logo2} alt="logo2" />
      </div>
      <div className="text-box">
        <p>
          The Center for Middle Eastern Studies (ORSAM) was established in
          January 2009 to inform the general public and the foreign policy
          community on the Middle East. ORSAM is a nonpartisan and non-profit
          research center based in Ankara.
        </p>
      </div>
      <div className="social-media">
        {socialMediaBtns.map((btn) => (
          <Link key={btn.label} to={btn.path}>
            <img src={btn.icon} alt={btn.label} />
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};
export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 7.5rem;
  padding-top: 7.5rem;

  .text-box {
    p {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #4a4a4a;
      max-width: 66rem;
      margin-top: 3rem;
      margin-bottom: 5rem;
      text-align: center;
    }
  }
  .social-media {
    img {
      width: 48px;
      height: 48px;
      margin-left: 3rem;
    }
  }
  .img-container {
    max-width: 46rem;
    @media (max-width: 776px) {
      max-width: 40rem;
    }
    img {
      width: 100%;
    }
  }
`;

export default ResearchCenter;
