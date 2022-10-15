import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsBook, updateBook } from "../../common/actions/bookActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { BOOK_UPDATE_RESET } from "../../common/constants/bookConstants";

const BookEditScreen = (props) => {
  const bookId = props.match.params.id;
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");

  const bookDetails = useSelector((state) => state.bookDetails);
  const { loading, error, book } = bookDetails;

  const bookUpdate = useSelector((state) => state.bookUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = bookUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push("/booklist");
    }
    if (!book || book._id !== bookId || successUpdate) {
      dispatch({ type: BOOK_UPDATE_RESET });
      dispatch(detailsBook(bookId));
    } else {
      setTitle(book.title);
      setImage(book.image);
      setCategory(book.category);
      setUrl(book.url);
    }
  }, [book, dispatch, bookId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateBook({
        _id: bookId,
        title,
        image,
        category,
        url,
      })
    );
  };

  return (
    <div>
      <form className="w-[90%] m-[auto] mt-[20px]" onSubmit={submitHandler}>
        <div>
          <h1 className="text-center text-[16px] lg:text-[24px] font-bold">Create / Edit Book {bookId}</h1>
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
                  placeholder="Enter name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>
              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="image">Image</label>
                <input
                  id="image"
                  type="text"
                  placeholder="Enter image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                ></input>
              </div>
            
              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="category">Category</label>
                <input
                  id="category"
                  type="text"
                  placeholder="Enter category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </div>


              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="category">URL</label>
                <input
                  id="url"
                  type="text"
                  placeholder="Enter url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                ></input>
              </div>

              <div className="w-[100%]">
                <button className="primary bg-[#0067b1] w-[100%] p-[10px]" type="submit">
                  Update / Cretate Book
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
export default memo(BookEditScreen);