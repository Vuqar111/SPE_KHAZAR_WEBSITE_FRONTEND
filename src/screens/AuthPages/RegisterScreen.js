import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../common/actions/userActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { universities } from "../../data";
import { faculties } from "../../data";
import PasswordStrengthBar from 'react-password-strength-bar';


const RegisterScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("Khazar University");
  const [faculty, setFaculty] = useState("Petroleum Engineering");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if(password.length < 6){
      alert("Password must be at least 6 characters");
    }
    else if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } 
    else {
      dispatch(register(name, email, university, faculty,birthday, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);



  return (
    <React.Fragment>
      <div className=" w-[100%] mt-[30px] flex justify-between flex-col">
        <div className="w-[100%]  flex items-center justify-center mt-[60px] lg:mt-[0px]">
          <form className="w-[90%] m-[auto] lg:w-[40%]" onSubmit={submitHandler}>
            <div>
              <h1 className="font-bold text-[25px] lg:text-[40px]">Hey, Welcome to SPE Family</h1>
            </div>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <div className="mt-[10px]">
              <label className="mt-[15px]" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-[100%] bg-[#E8F0FE] p-[10px] outline-1 outline-[#0067B1] outline-solid"
                placeholder="Enter name"
                required
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="mt-[10px]">
              <label className="mt-[15px]" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-[100%] bg-[#E8F0FE] p-[10px] outline-1 outline-[#0067B1] outline-solid"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="mt-[10px]">
              <label className="mt-[15px]" htmlFor="birthday">
                BirthDay
              </label>
              <input
                type="date"
                id="birthday"
                className="w-[100%] bg-[#E8F0FE] p-[10px] outline-1 outline-[#0067B1] outline-solid"
                placeholder="Enter birthday"
                required
                onChange={(e) => setBirthday(e.target.value)}
              ></input>
            </div>
            <div className="mt-[10px]">
              <label className="mt-[15px]" htmlFor="university">
                University
              </label>
              <select
                type="text"
                id="university"
                className="w-[100%] bg-[#E8F0FE] text-[black] p-[10px] outline-1 outline-[#0067B1] outline-solid"
                placeholder="Enter University"
                required
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              >
                {universities.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
            <div className="mt-[10px]">
              <label className="mt-[15px]" htmlFor="faculty">
                Faculty
              </label>
              <select
                type="text"
                id="faculty"
                className="w-[100%] bg-[#E8F0FE] text-[black] p-[10px] outline-1 outline-[#0067B1] outline-solid"
                placeholder="Enter Faculty"
                value={faculty}
                required
                onChange={(e) => setFaculty(e.target.value)}
              >
                {faculties.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
            <div className="mt-[10px]">
              <label className="mt-[15px]" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-[100%] bg-[#E8F0FE] p-[10px] outline-1 outline-[#0067B1] outline-solid"
                placeholder="Enter password"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <PasswordStrengthBar password={password} minLength={5} />
            </div>
            <div className="mt-[10px]">
              <label className="mt-[15px]" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-[100%] bg-[#E8F0FE] p-[10px]  outline-1 outline-[#0067B1] outline-solid"
                placeholder="Enter confirm password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            <div className="mt-[10px]">
              <label />
              <button
                className="bg-[#000] w-[100%] text-[white] p-[10px] mt-[15px]"
                type="submit"
              >
                Register
              </button>
            </div>
            <div>
              <label />
              <div className="mt-[10px]">
                Already have an account?{" "}
                <Link
                  className="text-[#0067B1] font-bold"
                  to={`/signin?redirect=${redirect}`}
                >
                  Sign-In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}


export default memo(RegisterScreen)