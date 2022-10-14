import React from "react";
import { Link } from "react-router-dom";
const SubHeader = () => {
  return (
    <React.Fragment>
      <div>
        <div className="w-[100%] flex relative h-[14vh] lg:h-[8vh] mt-[8vh] text-[white] text-[20px] bg-[#0067B1]">
          <nav className="w-[100%] p-[10px] lg:p-[0px] lg:w-[90%] mx-[auto] flex justify-between items-center">
            <div className="w-[100%] flex flex-col lg:flex-row justify-between lg:items-center flex-start text-[18px] lg:text-[20px] font-bold">
              <div className="w-[100%] lg:w-[40%] flex justify-between ">
                <div className="m-[5px] text-[14px] lg:text-[18px] lg:ml-[10px]">
                  <Link to="/events">Events</Link>
                </div>
                <div className="m-[5px] text-[14px] lg:text-[18px] lg:ml-[10px]">
                  <Link to="/blogs">Blogs</Link>
                </div>
                <div className="m-[5px] text-[14px] lg:text-[18px] lg:ml-[10px]">
                  <Link to="/records">Records</Link>
                </div>
                <div className="m-[5px] text-[14px] lg:text-[18px] lg:ml-[10px]">
                  <Link to="/books">Library</Link>
                </div>
                <div className="m-[5px] text-[14px] lg:text-[18px] lg:ml-[10px]">
                  <Link to="/galleries">Gallery</Link>
                </div>
                <div className="m-[5px] text-[14px] lg:text-[18px] lg:ml-[10px]">
                  <Link to="/teams">Team</Link>
                </div>
              </div>

              <div className="checkCertificateBtn">
                <Link to="/certificatecheck">
                  <button>Check Certificate</button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SubHeader;
