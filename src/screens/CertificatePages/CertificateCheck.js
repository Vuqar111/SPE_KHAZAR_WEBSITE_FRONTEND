import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listCertificates } from "../../common/actions/certificateActions";
const CertificateCheck = () => {
  const [code, setCode] = useState("");

  const dispatch = useDispatch();
  const certificateList = useSelector((state) => state.certificateList);
  const { loading, error, certificates } = certificateList;

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
      const isFound = certificates.find((element) => {
        if (element.code === code) {
          window.location.href = element.url;
        }
        if (element.code !== code) {
          return "Certificate not found";
        }
      });
      isFound();
    }
  };

  return (
    <div className=" lg:min-h-[40vh] w-[90%] lg:w-[60%] mx-[auto] mt-[30px] shadow text-center p-[10px]">
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
              className="w-[100%] bg-[white]  mt-[10px] mb-[10px] text-[16px] lg:text-[20px] text-center border-1 border-solid border-[#0067B1]"
              type="number"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Your certificate id number"
            />
            <button
              type="submit"
              className="w-[100%] text-[16px] lg:text-[20px]  p-[10px] bg-[#0067B1] text-white"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CertificateCheck;
