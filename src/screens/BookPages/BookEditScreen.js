import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { detailsBook, updateBook } from "../../common/actions/bookActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { BOOK_UPDATE_RESET } from "../../common/constants/bookConstants";

export default function BookEditScreen(props) {
  const bookId = props.match.params.id;
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
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
      setAuthor(book.author);
      setImage(book.image);
      setCategory(book.category);
      setDescription(book.description);
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
        author,
        image,
        category,
        description,
        url,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Create / Edit Book {bookId}</h1>
          <p className="text-center">Description calisin 190 sozden artiq olmasin</p>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div className="editmainform">
              <div>
                <label htmlFor="name">Title</label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="author">Author</label>
                <input
                  id="author"
                  type="text"
                  placeholder="Enter author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="image">Image</label>
                <input
                  id="image"
                  type="text"
                  placeholder="Enter image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                ></input>
              </div>
            
              <div>
                <label htmlFor="category">Category</label>
                <input
                  id="category"
                  type="text"
                  placeholder="Enter category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </div>


              <div>
                <label htmlFor="category">URL</label>
                <input
                  id="url"
                  type="text"
                  placeholder="Enter url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                ></input>
              </div>

              <div>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  rows="3"
                  type="text"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label></label>
                <button className="primary" type="submit">
                  Update/Create Book
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}