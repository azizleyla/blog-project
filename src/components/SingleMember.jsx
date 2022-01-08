import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SingleMember = ({ id, name, position, img }) => {
  return (
    <Wrapper>
      <Link to={`/teammember/${id}`}>
        <div className="team-box">
          <img src={img} alt={name} />
          <div className="team-box-footer">
            <h5>{name}</h5>
            <p>{position}</p>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .team-box {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(192, 189, 189, 0.25);
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
      box-shadow: 0px 4px 4px rgba(211, 209, 209, 0.25),
        0px 4px 20px rgba(211, 209, 209, 0.5);
    }
    img {
      width: 100%;
    }
  }
  .team-box-footer {
    padding: 1.5rem 0 2.5rem 0;
    text-align: center;
    h5 {
      font-weight: 600;
      font-size: 24px;
      line-height: 160%;

      color: #4a4a4a;
    }
    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 160%;
      margin-top: 0.5rem;
      color: #4a4a4a;
    }
  }
`;

export default SingleMember;
