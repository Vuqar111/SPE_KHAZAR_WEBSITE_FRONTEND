import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../common/actions/userActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import styled from "styled-components";
import { universities } from "../../data";
import { faculties } from "../../data";
export default function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [faculty, setFaculty] = useState("");
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
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } 
    else {
      dispatch(register(name, email, university, faculty, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);



  return (
    <Wrapper>
      <div className=" w-[100%] mt-[30px] flex justify-between mainlogin">
        <div className="w-[100%]  flex items-center justify-center input">
          <form className="form" onSubmit={submitHandler}>
            <div>
              <h1 className="font-bold text-[40px] text-center">Hey, Welcome to SPE Family</h1>
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
              <div className="loginfooter">
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 40px;

  .form {
    width: 40%;
  }

  @media (max-width: 768px) {
    .form {
      width: 90%;
      margin: auto;
    }
    .mainlogin {
      height: auto;
      flex-direction: column;
    }
    .imgcontent {
      display: none;
    }
    .input {
      width: 100%;
      margin-top: 60px;
    }
    .input h1 {
      font-size: 25px;
    }
    .input input {
      width: 100%;
    }
    .input button {
      width: 100%;
    }
  }
`;
