import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import {
  FaFacebook,
  FaHamburger,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Topbar = ({ setIsOpenSidebar, isOpenSidebar }) => {
  return (
    <TopbarContainer className="container">
      <img src={logo} alt="logo" />
      <button
        onClick={() => setIsOpenSidebar(true)}
        className="toggle-btn"
      >
        <i className="fas fa-bars" />
      </button>

      <div className="social-media-icons">
        <Link to="/">
          <FaFacebook className="icon" />
        </Link>
        <Link to="/twitter">
          <FaTwitter className="icon" />
        </Link>
        <Link to="/twitter">
          <FaWhatsapp className="icon" />
        </Link>
      </div>
    </TopbarContainer>
  );
};

const TopbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 776px) {
    padding: 0 1rem;
  }
  .social-media-icons {
    @media (max-width: 992px) {
      display: none;
    }
  }
  .icon {
    color: #fff;
    font-size: 1.9rem;
    margin-right: 3rem;
  }
  .toggle-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: none;
    @media (max-width: 992px) {
      display: block;
    }
    i {
      color: #fff;
      font-size: 2rem;
    }
  }
`;

export default Topbar;
