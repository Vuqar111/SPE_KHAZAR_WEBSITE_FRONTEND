import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createRecord, deleteRecord, listRecords } from "../../common/actions/recordActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import {
  RECORD_CREATE_RESET,
  RECORD_DELETE_RESET,
} from "../../common/constants/recordConstants";

const RecordListScreen = (props)  => {
  const recordList = useSelector((state) => state.recordList);
  const { loading, error, records } = recordList;

  const recordCreate = useSelector((state) => state.recordCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    record: createdRecord,
  } = recordCreate;

  const recordDelete = useSelector((state) => state.recordDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = recordDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: RECORD_CREATE_RESET });
      props.history.push(`/record/${createdRecord._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: RECORD_DELETE_RESET });
    }
    dispatch(listRecords());
  }, [createdRecord, dispatch, props.history, successCreate, successDelete]);

  const deleteHandler = (record) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteRecord(record._id));
    }
  };
  const createHandler = () => {
    dispatch(createRecord());
  };

  return (
    <div style={{minHeight: "60vh"}}>
      <div className="row">
      <h1 className="font-bold text-[16px] lg:text-[24px]">SPE KHAZAR Records List</h1>
        <button type="button" className="primary p-[1rem]" onClick={createHandler}>
          Create Record
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
        <>
          <table className="table">
            <thead className="tableHeader">
              <tr>
                <th>TITLE</th>
                <th>AUTHOR</th>
                <th>CATEGORY</th>
                <th>URL</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {records.map((record) => (
                <tr key={record._id}>
                  <td>{record.title}</td>
                  <td>{record.author}</td>
                  <td>{record.category}</td>
                  <td>{record.url}</td>
                  <td>
                    <button
                      type="button"
                      className="small edit p-[1rem]"
                      onClick={() =>
                        props.history.push(`/record/${record._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small delete p-[1rem]"
                      onClick={() => deleteHandler(record)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}


export default memo(RecordListScreen);