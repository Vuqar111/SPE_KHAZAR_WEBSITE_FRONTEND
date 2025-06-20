import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsRecord, updateRecord } from "../../common/actions/recordActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { RECORD_UPDATE_RESET } from "../../common/constants/recordConstants";

const RecordEditScreen = (props) => {
  const recordId = props.match.params.id;
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");

  const recordDetails = useSelector((state) => state.recordDetails);
  const { loading, error, record } = recordDetails;

  const recordUpdate = useSelector((state) => state.recordUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = recordUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push("/recordlist");
    }
    if (!record || record._id !== recordId || successUpdate) {
      dispatch({ type: RECORD_UPDATE_RESET });
      dispatch(detailsRecord(recordId));
    } else {
      setTitle(record.title);
      setAuthor(record.author);
      setCategory(record.category);
      setUrl(record.url);
    }
  }, [record, dispatch, recordId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update record
    dispatch(
      updateRecord({
        _id: recordId,
        title,
        author,
        category,
        url,
      })
    );
  };

 

  return (
    <div>
      <form className="w-[90%] m-[auto] mt-[20px]" onSubmit={submitHandler}>
        <div>
          <h1 className="text-center text-[16px] lg:text-[24px] font-bold">Create / Edit Record {recordId}</h1>
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
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>
              <div className="w-[100%] flex items-center justify-between mt-[15px]"> 
                <label htmlFor="author">Author</label>
                <input
                  id="author"
                  type="text"
                  placeholder="Enter author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                ></input>
              </div>
              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="category">category</label>
                <input
                  id="category"
                  type="text"
                  placeholder="Enter Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </div>
              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="url">Url</label>
                <input
                  id="url"
                  type="text"
                  placeholder="Enter Url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                ></input>
              </div>

              <div className="w-[100%]">
                <button className="primary bg-[#0067b1] w-[100%] p-[10px]" type="submit">
                  Update / Cretate Record
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default memo(RecordEditScreen)
