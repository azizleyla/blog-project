import React from "react";
import styled from "styled-components";
import BorderedText from "./BorderedText";

const HearFromUs = () => {
  return (
    <Wrapper>
      <BorderedText content="Hear From Us" />
      <form>
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    input {
      padding: 1.6rem 1.2rem;
      border: 1px solid #bdbdbd;
      border-radius: 4px;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      text-transform: capitalize;
      color: #757575;
      margin-bottom: 3rem;
      outline: none;
    }
    button {
      background: #3781df;
      border-radius: 8px;
      padding: 1.6rem 0;
      display: flex;
      align-items: center;
      letter-spacing: 0.892857px;
      color: #ffffff;
      justify-content: center;
      border: none;
      outline: none;
      cursor: pointer;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      transition: all 0.4s;
      &:hover {
        background: #2e67b0;
      }
    }
  }
`;
export default HearFromUs;
