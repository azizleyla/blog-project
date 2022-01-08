import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { navItems } from "../utils/contants";
import Topbar from "./Topbar";

const Navbar = ({ isOpenSidebar, setIsOpenSidebar }) => {
  const [activeLink, setActiveLink] = useState("Home");
  return (
    <Wrapper>
      <Topbar
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
      <nav className="navbar container">
        <ul className={isOpenSidebar ? "navbar-menu show" : "navbar-menu"}>
          <button
            className="close-btn"
            onClick={() => setIsOpenSidebar(false)}
          >
            <i className="fas fa-times"></i>
          </button>

          {navItems.map((navItem) => (
            <li key={navItem.id}>
              <Link
                className={
                  activeLink === navItem.label
                    ? "navbar-link active"
                    : "navbar-link"
                }
                onClick={() => {
                  setActiveLink(navItem.label);
                  setIsOpenSidebar(false);
                }}
                to={navItem.path}
              >
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #3781df;
  padding: 1rem 0;
  @media (max-width: 1200px) {
    padding: 1rem 1.5rem;
  }
  .navbar-menu {
    display: flex;
    justify-content: space-between;
    @media (max-width: 992px) {
      position: fixed;
      z-index: 999;
      height: 100%;
      left: -100%;
      top: 0;
      flex-direction: column;
      justify-content: flex-start;
      background-color: #3781df;
      width: 100%;
      transition: all 0.4s;
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.8);
      padding: 6rem 1rem;
      text-align: center;
      &.show {
        left: 0;
      }
    }
    li {
      a {
        font-weight: normal;
        font-size: 1.6rem;
        line-height: 20px;
        color: #ffffff;
        @media (max-width: 992px) {
          display: inline-block;
          font-size: 1.8rem;
          text-align: center;
          margin-bottom: 2rem;
        }
        &.active {
          font-weight: bold;
        }
      }
    }
  }
  .close-btn {
    position: absolute;
    right: 1rem;
    top: 2rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: none;
    @media (max-width: 992px) {
      display: block;
    }
    i {
      font-size: 2.5rem;
      color: #fff;
    }
  }
`;

export default Navbar;
