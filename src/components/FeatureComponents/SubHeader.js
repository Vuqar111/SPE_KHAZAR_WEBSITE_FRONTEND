import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const SubHeader = () => {
  return (
    <Wrapper>
  <div>
      <div className="subnavbar">
        <nav>
          <div className="mainsubheader font-bold">
            <div className="w-[100%] flex justify-between subheader">
              <div className="subLink">
                <Link to="/events">Events</Link>
              </div>
              <div div className="subLink">
                <Link to="/blogs">Blogs</Link>
              </div>
              <div div className="subLink">
                <Link to="/records">Records</Link>
              </div>
              <div div className="subLink">
                <Link to="/books">Library</Link>
              </div>
              <div div className="subLink">
                <Link to="/galleries">Gallery</Link>
              </div>
              <div div className="subLink">
                <Link to="/teams">Team</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    </Wrapper>
  );
};

export default SubHeader;


const Wrapper = styled.div`


@media (max-width: 768px) {
  .mainsubheader {
    width: 100%;
    font-size: 10px;
  }
}

`