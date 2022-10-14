import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-[#0067B1] flex w-[100%]  text-[white] mt-[50px] relative">
      <div className="flex flex-col lg:flex-row justify-between m-[auto]  w-[80%] mt-[20px] mb-[30px] relative">
        <div className="font-bold text-[28px] lg:text-[35px]">SPE-Khazar</div>
        <div>
          <div className="font-black text-[20px] mt-[10px]">Resources</div>
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
              <Link to="/books">Library</Link>
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
          <div className="font-black text-[20px] mt-[10px]">Help</div>
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
          <div className="font-black text-[20px] mt-[10px]">Social Media</div>
          <div className="w-[40%] lg:w-[100%] flex  lg:items-center justify-between">
            <li className="m-[5px]">
              <a href="https://www.facebook.com/SPE.Khazar" target="_blank">
                <AiOutlineFacebook className="text-[32px] cursor-pointer" />
              </a>
            </li>
            <li className="m-[5px]">
              {" "}
              <a
                href="https://www.instagram.com/spe.khazar/"
                target="_blank"
                className="text-[32px] cursor-pointer"
              >
                <AiOutlineInstagram />
              </a>
            </li>
            <li className="m-[5px]">
              {" "}
              <a
                href="https://www.linkedin.com/company/spe-khazar-university-student-chapter/"
                target="_blank"
                className="text-[32px] cursor-pointer"
              >
                <AiOutlineLinkedin />
              </a>
            </li>
            <li className="m-[5px]">
              {" "}
              <a
                href="https://www.youtube.com/channel/UCkHQt8M4ohFXIqZ56euFRIQ"
                target="_blank"
                className="text-[32px] cursor-pointer"
              >
                <AiOutlineYoutube />
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
