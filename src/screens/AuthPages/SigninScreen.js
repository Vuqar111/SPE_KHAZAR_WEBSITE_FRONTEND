import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../../common/actions/userActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";


const SigninScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <React.Fragment>
      <div className="w-[100%] mt-[50px] flex justify-between ">
        <div className="w-[100%]  flex items-center justify-center">
          <form className="lg:w-[40%] w-[90%]" onSubmit={submitHandler}>
            <div>
              <h1 className="font-bold text-[35px] pb-[10px] lg:text-[60px] text-center">Sign In</h1>
            </div>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <div>
              <label className="mt-[15px]" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                required
                className="w-[100%] bg-[#E8F0FE] p-[10px]"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="mt-[15px]">
              <label className="mt-[15px]" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-[100%] bg-[#E8F0FE] p-[10px]"
                placeholder="Enter password"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label />
              <button
                className="bg-[#000] w-[100%] text-[white] p-[10px] mt-[15px]"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <div>
              <label />
              <div className="mt-[10px]">
                New User?{" "}
                <Link
                  to={`/register?redirect=${redirect}`}
                  className="text-[#0067B1] font-bold"
                >
                  Create your account
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}


export default memo(SigninScreen);