import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCertificate,
  deleteCertificate,
  listCertificates,
} from "../../common/actions/certificateActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import {
  CERTIFICATE_CREATE_RESET,
  CERTIFICATE_DELETE_RESET,
} from "../../common/constants/certificateConstants";

const CertificateListScreen = (props) => {
  const certificateList = useSelector((state) => state.certificateList);
  const { loading, error, certificates } = certificateList;

  const certificateCreate = useSelector((state) => state.certificateCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    certificate: createdCertificate,
  } = certificateCreate;

  const certificateDelete = useSelector((state) => state.certificateDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = certificateDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: CERTIFICATE_CREATE_RESET });
      props.history.push(`/certificate/${createdCertificate._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: CERTIFICATE_DELETE_RESET });
    }
    dispatch(listCertificates());
  }, [
    createdCertificate,
    dispatch,
    props.history,
    successCreate,
    successDelete,
  ]);

  const deleteHandler = (certificate) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteCertificate(certificate._id));
    }
  };
  const createHandler = () => {
    dispatch(createCertificate());
  };

  return (
    <div style={{ minHeight: "60vh" }}>
      <div className="row">
        <h1 className="font-bold text-[16px] lg:text-[24px]">
          SPE KHAZAR Certificate List
        </h1>
        <button
          type="button"
          className="primary p-[1rem]"
          onClick={createHandler}
        >
          Create Certificate
        </button>
      </div>

      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="w-[100%] flex items-center justify-center">
          <table className="table">
            <thead>
              <tr className="tableHeader">
                <th>TITLE</th>
                <th>CODE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {certificates.map((certificate) => (
                <tr key={certificate._id}>
                  <td>{certificate.title}</td>
                  <td>{certificate.code}</td>
                  <td>
                    <button
                      type="button"
                      className="small edit p-[1rem]"
                      onClick={() =>
                        props.history.push(
                          `/certificate/${certificate._id}/edit`
                        )
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small delete p-[1rem]"
                      onClick={() => deleteHandler(certificate)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default memo(CertificateListScreen)