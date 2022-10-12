import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  detailsUser,
  updateUserProfile,
} from "../../common/actions/userActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { universities } from "../../data";
import { faculties } from "../../data";
import { USER_UPDATE_PROFILE_RESET } from "../../common/constants/userConstants";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [faculty, setFaculty] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
      setUniversity(user.university);
      setFaculty(user.faculty);
    }
  }, [dispatch, userInfo._id, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    if(password.length < 6){
      alert("Password must be at least 6 characters");
    }
    if (password !== confirmPassword) {
      alert("Password and Confirm Password Are Not Matched");
    } else {
      dispatch(
        updateUserProfile({
          userId: user._id,
          name,
          email,
          university,
          faculty,
          password,
        })
      );
    }
  };

  return (
    <React.Fragment>
      <div className="flex flex-wrap justify-between items-center m-[auto] pt-[30px] w-[100%] lg:w-[70%] mainuser">
        <div className="flex justify-center items-center w-[100%]">
          <form className="w-[100%] p-[10px]" onSubmit={submitHandler}>
            <div>
              <h1 className="font-bold text-[25px]">User Profile</h1>
            </div>
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <>
                {loadingUpdate && <LoadingBox></LoadingBox>}
                {errorUpdate && (
                  <MessageBox variant="danger">{errorUpdate}</MessageBox>
                )}
                {successUpdate && (
                  <MessageBox variant="success">
                    Profile Updated Successfully
                  </MessageBox>
                )}
                <div className="w-[100%] flex flex-col mt-[10px]">
                  <div className="w-[100%] flex flex-col lg:flex-row justify-between items-center text-left mt-[10px]">
                    <label
                      className="w-[100%] text-left lg:w-[30%] text-[16px] lg:text-[20px]"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-[100%] bg-[#E8F0FE] p-[10px] mt-[5px] outline-1 outline-[#0067B1] outline-solid"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                  <div className="w-[100%] flex flex-col lg:flex-row justify-between items-center text-left mt-[10px] ">
                    <label
                      className="w-[100%] text-left lg:w-[30%] text-[16px] lg:text-[20px]"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-[100%] bg-[#E8F0FE] p-[10px] mt-[5px] outline-1 outline-[#0067B1] outline-solid"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                  <div className="w-[100%] flex flex-col lg:flex-row justify-between items-center text-left mt-[10px] ">
                    <label
                      className="w-[100%] text-left lg:w-[30%] text-[16px] lg:text-[20px]"
                      htmlFor="university"
                    >
                      University
                    </label>
                    <select
                      type="text"
                      id="university"
                      className="w-[100%] bg-[#E8F0FE] text-[black] mt-[5px] p-[10px] outline-1 outline-[#0067B1] outline-solid"
                      placeholder="Enter University"
                      value={university}
                      required
                      onChange={(e) => setUniversity(e.target.value)}
                    >
                      {universities.map((item) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </select>
                  </div>
                  <div className="w-[100%] flex flex-col lg:flex-row justify-between items-center text-left mt-[10px] ">
                    <label
                      className="w-[100%] text-left lg:w-[30%] text-[16px] lg:text-[20px]"
                      htmlFor="faculty"
                    >
                      Faculty
                    </label>
                    <select
                      type="text"
                      id="faculty"
                      className="w-[100%] bg-[#E8F0FE] text-[black] mt-[5px] p-[10px] outline-1 outline-[#0067B1] outline-solid"
                      placeholder="Enter Faculty"
                      required
                      value={faculty}
                      onChange={(e) => setFaculty(e.target.value)}
                    >
                      {faculties.map((item) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </select>
                  </div>
                  <div className="w-[100%] flex flex-col lg:flex-row justify-between items-center text-left mt-[10px] ">
                    <label
                      className="w-[100%] text-left lg:w-[30%] text-[16px] lg:text-[20px]"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="w-[100%] bg-[#E8F0FE] p-[10px] mt-[5px] outline-1 outline-[#0067B1] outline-solid"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                  <div className="w-[100%] flex flex-col lg:flex-row justify-between items-center text-left mt-[10px] ">
                    <label
                      className="w-[100%] text-left lg:w-[30%] text-[16px] lg:text-[20px]"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      className="w-[100%] bg-[#E8F0FE] lg:p-[10px] mt-[5px] outline-1 outline-[#0067B1] outline-solid"
                      placeholder="Enter confirm password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                  </div>
                  <div className="w-[100%]">
                    <button className="primary p-[10px] w-[100%]" type="submit">
                      Update
                    </button>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
