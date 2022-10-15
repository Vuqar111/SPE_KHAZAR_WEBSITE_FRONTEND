import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  detailsCertificate,
  updateCertificate,
} from "../../common/actions/certificateActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { CERTIFICATE_UPDATE_RESET } from "../../common/constants/certificateConstants";


const CertificateEditScreen = (props) => {
  const certificateId = props.match.params.id;
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [qrImage, setQrImage] = useState("");
  const [url, setUrl] = useState("");

  const certificateDetails = useSelector((state) => state.certificateDetails);
  const { loading, error, certificate } = certificateDetails;

  const certificateUpdate = useSelector((state) => state.certificateUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = certificateUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push("/certificatelist");
    }
    if (!certificate || certificate._id !== certificateId || successUpdate) {
      dispatch({ type: CERTIFICATE_UPDATE_RESET });
      dispatch(detailsCertificate(certificateId));
    } else {
      setTitle(certificate.title);
      setCode(certificate.code);
      setQrImage(certificate.qrImage);
      setUrl(certificate.url);
    }
  }, [certificate, dispatch, certificateId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateCertificate({
        _id: certificateId,
        title,
        code,
        qrImage,
        url,
      })
    );
  };

  return (
    <div>
      <form className="w-[90%] m-[auto] mt-[20px]" onSubmit={submitHandler}>
        <div>
          <h1 className="text-center text-[16px] lg:text-[24px] font-bold">
            Create / Edit Certificate {certificateId}
          </h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div className="editFormContainer">
              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="name">Title</label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>

              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="code">Code</label>
                <input
                  id="code"
                  type="text"
                  placeholder="Enter Code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                ></input>
              </div>
              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="url">URL</label>
                <input
                  id="url"
                  type="text"
                  placeholder="Enter Url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                ></input>
              </div>
              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="image">Qr Image</label>
                <input
                  id="image"
                  type="text"
                  placeholder="Enter QrImage"
                  value={qrImage}
                  onChange={(e) => setQrImage(e.target.value)}
                ></input>
              </div>

              <div className="w-[100%]">
                <button
                  className="primary bg-[#0067b1] w-[100%] p-[10px]"
                  type="submit"
                >
                  Update / Cretate Certificate 
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}


export default memo(CertificateEditScreen);