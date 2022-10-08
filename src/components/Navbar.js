import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown, { Item } from './dropdown/Dropdown';
import { Button } from 'antd'
import { BsVectorPen, BsCalendar2Week, BsFillCollectionPlayFill, BsJournalBookmark } from "react-icons/bs";
import { FiUsers, FiSettings } from "react-icons/fi";
import { GrGallery } from "react-icons/gr";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { signout } from "../actions/userActions";
import { AiFillCaretDown } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import logo from "../assets/images/spekhazarlogo.png";

export const Navbar = () => {
    const cart = useSelector((state) => state.cart);
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    };
    const button = <Button style={{width: "100%", padding: "5px 8px", backgroundColor: "#0067B1", color: "#fff", fontWeight: "bold", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center"}}>Admin <AiFillCaretDown className="buttondownIcon" /></Button>
    const userButton = <Button style={{width: "100%", minWidth: "130px", padding: "5px 10px", backgroundColor: "#0067B1", color: "#fff", fontWeight: "bold", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center"}}>Hi, {userInfo?.name} <AiFillCaretDown className="buttondownIcon" /></Button>

    useEffect(() => { }, [dispatch]);
    const [showlink, setshowlink] = useState(false);
    return (
        <div>
            <div className="navbar">
                <nav>
                    <div className="firstnav">
                        <img src={logo} className="siteLogo"/>
                        <Link to="/">
                            <div className="siteName">SPE Khazar</div>
                        </Link>
                    </div>
                    <div
                        className={`${showlink
                            ? "links-container navmenu show-container"
                            : "links-container navmenu"
                            }`}
                    >
                        <div className="submenu">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About </Link>
                                </li>
                                <li>
                                    <Link to="/">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="icondropdown">
                            {userInfo ? (
                                <div>
                                    <Dropdown link={userButton} width="250px">
                                        <Item><FiSettings className="buttondownIcon" /><Link to="/profile">Settings</Link></Item>
                                        <Item><FaSignOutAlt className="buttondownIcon" /><Link to="#signout" onClick={signoutHandler}>Sign Out</Link></Item>
                                    </Dropdown>
                                </div>
                            ) : (
                                <Link
                                    className="bg-[#0067B1] text-[white] rounded-[5px] pl-[8px]  pr-[8px] pt-[5px] pb-[5px] "
                                    to="/signin"
                                >
                                    Log In
                                </Link>
                            )}
                            {userInfo && userInfo.isAdmin && (
                                <div>
                                    <Dropdown link={button} width="250px">
                                        <Item><BsCalendar2Week className="buttondownIcon" /><Link to="/productlist">Events</Link></Item>
                                        <Item><BsVectorPen className="buttondownIcon" /><Link to="/bloglist">Blogs</Link></Item>
                                        <Item><FiUsers className="buttondownIcon" /><Link to="/userlist">Users</Link></Item>
                                        <Item><BsFillCollectionPlayFill className="buttondownIcon" /><Link to="/recordlist">Records</Link></Item>
                                        <Item><BsJournalBookmark className="buttondownIcon" /><Link to="/booklist">Library</Link></Item>
                                        <Item><GrGallery className="buttondownIcon" /><Link to="/gallerylist">Gallery</Link></Item>
                                    </Dropdown>
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        className="icon hamburger"
                        onClick={() => setshowlink(!showlink)}
                    >
                        {!showlink ? <GiHamburgerMenu /> : <GrClose />}
                        
                    </div>
                </nav>
            </div>
        </div>
    )
}
