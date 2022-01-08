import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container container">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
          <p>@ {new Date().getFullYear()} All rights reserved</p>
        </div>
        <div className="footer-menu left">
          <h3>About Us</h3>
          <ul>
            <li>
              <Link to="#" className="bold">
                Our team
              </Link>
            </li>
            <li>
              <Link to="#" className="bold">
                Experts
              </Link>
            </li>
            <li>
              <Link to="#" className="bold">
                Media
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-menu">
          <h3>Publications</h3>
          <ul>
            <li>
              <Link to="#">Research</Link>
            </li>
            <li>
              <Link to="#">Commentary</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="footer-menu">
          <h3>Activities</h3>
          <ul>
            <li>
              <Link to="#">Lectures</Link>
            </li>
            <li>
              <Link to="#">Workshops</Link>
            </li>
          </ul>
        </div>
        <div className="footer-menu">
          <h3>Contact us</h3>
          <ul>
            <li>
              <a href="https://www.freecodecamp.org/news/">
                Phone +994 051 77 88 99
              </a>
            </li>
            <li>
              <a href="https://www.freecodecamp.org/news/">
                E-mail: info@studies.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: #3781df;
  padding-top: 8rem;
  padding-bottom: 13rem;

  width: 100%;
  .footer-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 10rem;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 2rem;
      padding: 0 1.5rem;
    }
    @media (max-width: 776px) {
      grid-template-columns: 1fr;
    }
    .footer-logo {
      p {
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
        color: #d9eaff;
        margin-top: 2.5rem;
      }
    }
    .footer-menu {
      h3 {
        font-weight: 500;
        font-size: 21px;
        line-height: 26px;
        display: flex;
        align-items: center;
        text-transform: capitalize;
        margin-bottom: 2rem;
        color: #ffffff;
      }
      a.bold {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-transform: capitalize;
        color: #ffffff;
        margin-bottom: 2rem;
        display: inline-block;
      }
      a {
        font-weight: normal;
        font-size: 16px;
        line-height: 16px;
        text-transform: capitalize;
        color: #ffffff;
        margin-bottom: 2rem;
        display: inline-block;
        white-space: nowrap;
      }
    }
  }
`;

export default Footer;
