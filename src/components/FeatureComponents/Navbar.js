import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown, { Item } from "../dropdown/Dropdown";
import { Button } from "antd";
import {
  BsVectorPen,
  BsCalendar2Week,
  BsFillCollectionPlayFill,
  BsJournalBookmark,
} from "react-icons/bs";
import { FiUsers, FiSettings } from "react-icons/fi";
import { GrGallery } from "react-icons/gr";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { signout } from "../../common/actions/userActions";
import { AiFillCaretDown } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import logo from "../../assets/images/spekhazarlogo.png";

export const Navbar = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  const button = (
    <Button
      style={{
        width: "100%",
        padding: "5px 8px",
        backgroundColor: "#0067B1",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Admin <AiFillCaretDown className="buttondownIcon" />
    </Button>
  );
  const userButton = (
    <Button
      style={{
        width: "100%",
        minWidth: "130px",
        padding: "5px 10px",
        backgroundColor: "#0067B1",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Hi, {userInfo?.name} <AiFillCaretDown className="buttondownIcon" />
    </Button>
  );

  useEffect(() => {}, [dispatch]);
  const [showlink, setshowlink] = useState(false);
  return (
    <div>
      <div className="w-[100%] flex fixed h-[8vh] bg-[#f8f8f8] z-[10000] top-[0] border-1">
        <nav className="w-[100%]   p-[10px] lg:p-[0px] lg:w-[90%] mx-[auto] flex justify-between items-center">
          <div className="flex items-center justify-between text-[25px]">
            <img src={logo} className="w-[50px] h-[40px] m-[5px]" alt="" />
            <Link to="/">
              <div className="text-[20px] font-[800] text-[#0067b1]">
                SPE Khazar
              </div>
            </Link>
          </div>
          <div
            className={`${
              showlink
                ? "lg:block w-[100%] absolute left-[0] top-[0] pt-[0px]  mt-[8vh] bg-[#f8f8f8] z-[1000] pb-[10px] cursor-pointer"
                : "hidden lg:flex w-[auto]"
            }`}
          >
            <div className="flex w-[100%]">
              <ul className="w-[100%] py-[0px] ml-[20px] lg:ml-[0px] h-[auto] lg:h-[100%] flex flex-col lg:flex-row justify-between items-center">
                <li className="w-[100%]">
                  <Link to="/">Home</Link>
                </li>
                <li className="w-[100%]">
                  <Link to="/about">About </Link>
                </li>
                <li className="w-[100%]">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="icondropdown">
              {userInfo ? (
                <div>
                  <Dropdown link={userButton} width="250px">
                    <Item>
                      <FiSettings className="buttondownIcon" />
                      <Link to="/profile">Settings</Link>
                    </Item>
                    <Item>
                      <FaSignOutAlt className="buttondownIcon" />
                      <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                      </Link>
                    </Item>
                  </Dropdown>
                </div>
              ) : (
                <Link
                  className="bg-[#0067B1] text-[white] rounded-[5px] pl-[8px]  pr-[8px] pt-[5px] pb-[5px] ml-[10px] lg:ml-[0px]"
                  to="/signin"
                >
                  Log In
                </Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <div>
                  <Dropdown link={button} width="250px">
                    <Item>
                      <BsCalendar2Week className="buttondownIcon" />
                      <Link to="/eventlist">Events</Link>
                    </Item>
                    <Item>
                      <BsVectorPen className="buttondownIcon" />
                      <Link to="/bloglist">Blogs</Link>
                    </Item>
                    <Item>
                      <FiUsers className="buttondownIcon" />
                      <Link to="/userlist">Users</Link>
                    </Item>
                    <Item>
                      <BsFillCollectionPlayFill className="buttondownIcon" />
                      <Link to="/recordlist">Records</Link>
                    </Item>
                    <Item>
                      <BsJournalBookmark className="buttondownIcon" />
                      <Link to="/booklist">Library</Link>
                    </Item>
                    <Item>
                      <GrGallery className="buttondownIcon" />
                      <Link to="/gallerylist">Gallery</Link>
                    </Item>
                  </Dropdown>
                </div>
              )}
            </div>
          </div>
          <div
            className="icon block m-[12px] text-3xl lg:hidden cursor-pointer"
            onClick={() => setshowlink(!showlink)}
          >
            {!showlink ? <GiHamburgerMenu /> : <GrClose />}
          </div>
        </nav>
      </div>
    </div>
  );
};
