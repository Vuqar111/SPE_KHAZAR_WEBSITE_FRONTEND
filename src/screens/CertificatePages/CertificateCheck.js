import React, { useState, useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listCertificates } from "../../common/actions/certificateActions";
import { Link } from "react-router-dom";
const CertificateCheck = () => {
  const [code, setCode] = useState("");

  const dispatch = useDispatch();
  const certificateList = useSelector((state) => state.certificateList);
  const { loading, error, certificates } = certificateList;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  useEffect(() => {
    dispatch(listCertificates());
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (loading) {
      return "Loading...";
    } else if (error) {
      return "Error";
    } else if (certificates.length !== 0) {
      certificates.find((element) => {
        if (element.code !== code) {
        } else {
          window.open(element.url, "_blank");
        }
      });
    }
  };

  return (
    <div className=" lg:min-h-[40vh] w-[90%] lg:w-[60%] mx-[auto] mt-[30px] shadow text-center p-[10px]">
      {userInfo ? (
        <div>
          <h2 className="text-[24px] lg:text-[32px] font-bold">
            Check your certificate
          </h2>
          <p className="text-[16px] pt-[10px]">
            Please write your certificate ID number
          </p>
          <form className="flex flex-col mt-[30px]" onSubmit={submitHandler}>
            <div>
              <input
                className="w-[100%] bg-[white] p-[10px]  mt-[10px]  text-[16px] lg:text-[18px] text-center border-1 border-solid border-[#0067B1]"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Your certificate ID number"
              />

              <button
                type="submit"
                className="w-[100%] text-[16px] lg:text-[20px]  mt-[30px] p-[10px] bg-[#0067B1] text-white"
              >
                Check
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h2 className="text-[24px] lg:text-[32px] font-bold pt-[25px]">
            Please login for the checking certificate
          </h2>
          <p className="text-[16px] pt-[30px]">
            <Link to="/signin" className="text-[#0067B1] text-[24px] pt-[15px]">
              Click to Login!
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default memo(CertificateCheck);
