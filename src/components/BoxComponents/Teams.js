import React from "react";
import styled from "styled-components";
import { teams } from "../../data";
const Teams = () => {
  return (
    <Wrapper>
      <h1 className="font-bold text-[30px] w-[100%] p-[10px] text-center mb-[10px] bg-[#f5f5f5] text-[#0067b1]">
        Team
      </h1>
      <div className="teambox">
        {teams.map((team) => {
          return (
            <div className="teamCard" key={team.id}>
              <div className="team">
                <img className="team-image" src={team.img} alt={team.name} />
                <div className="team-description">
                  <p className="text-title">{team.name}</p>
                  <p className="text-body">{team.status}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Teams;

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .teambox {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .team {
    height: 320px;
    width: 250px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 20px 8px #d0d0d0;
    /* border: 3px solid #0067B1; */
  }
  .teamCard {
    margin: 20px;
  }
  .team-image {
    height: 100%;
    width: 100%;
    position: absolute;
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    background: #0067b1;
    object-fit: cover;
  }

  .team-description {
    display: flex;
    position: absolute;
    gap: 1em;
    flex-direction: column;
    background-color: #f5f5f5;
    width: 100%;
    height: 25%;
    bottom: 0;
    border-radius: 1em 1em 0 0;
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    padding: 5px 15px;
  }

  .text-title {
    font-size: 1.2em;
    font-weight: 700;
    color: #0067b1;
  }

  .text-body {
    font-size: 13px;
    line-height: 20px;
    margin-top: -15px;
  }

  .team:hover .team-description {
    transform: translateY(120%);
  }
`;
