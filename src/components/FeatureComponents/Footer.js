import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#0067B1] flex w-[100%]  text-[white] mt-[50px] relative">
      <div className="flex flex-col lg:flex-row justify-between m-[auto]  w-[80%] mt-[20px] mb-[30px] relative">
        <div className="font-bold text-[35px]">SPE-KHAZAR</div>
        <div>
          <div className="font-bold text-[16px] mt-[10px]">Resources</div>
          <div className="footerul">
            <li className="mt-[5px]">
              <Link to="/events">Events</Link>
            </li>
            <li className="mt-[5px]">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="mt-[5px]">
              <Link to="/records">Records</Link>
            </li>
            <li className="mt-[5px]">
              <Link to="/library">Library</Link>
            </li>
            <li className="mt-[5px]">
              <Link to="/galleries">Gallery</Link>
            </li>
            <li className="mt-[5px]">
              <Link to="/teams">Team</Link>
            </li>
          </div>
        </div>

        <div>
          <div className="font-bold text-[16px] mt-[10px]">Help</div>
          <div className="footerul">
            <li className="mt-[5px]">
              <Link to="/contact">Contact Us</Link>
            </li>
            <Link to="/faq">
              <li className="mt-[5px]">FAQ</li>
            </Link>
          </div>
        </div>

        <div>
          <div className="font-bold text-[16px] mt-[10px]">Social Media</div>
          <div className="footerul">
            <li className="mt-[5px]">
              <a href="https://tr-tr.facebook.com/">
              FaceBook
                </a></li>
            <li className="mt-[5px]">Instagram</li>
            <li className="mt-[5px]">Linkedin</li>
            <li className="mt-[5px]">Youtube</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
