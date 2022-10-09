import React from "react";
import { Link } from "react-router-dom";
const SubHeader = () => {
  return (
    <React.Fragment>
  <div>
      <div className="subnavbar">
        <nav>
          <div className="w-[100%] font-bold">
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
    </React.Fragment>
  );
};

export default SubHeader;

