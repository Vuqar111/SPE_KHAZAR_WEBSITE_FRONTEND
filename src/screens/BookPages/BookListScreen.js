import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createBook, deleteBook, listBooks } from "../../common/actions/bookActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import {
  BOOK_CREATE_RESET,
  BOOK_DELETE_RESET,
} from "../../common/constants/bookConstants";

const BookListScreen = (props)  =>{
  const bookList = useSelector((state) => state.bookList);
  const { loading, error, books } = bookList;

  const bookCreate = useSelector((state) => state.bookCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    book: createdBook,
  } = bookCreate;

  const bookDelete = useSelector((state) => state.bookDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = bookDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: BOOK_CREATE_RESET });
      props.history.push(`/book/${createdBook._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: BOOK_DELETE_RESET });
    }
    dispatch(listBooks());
  }, [createdBook, dispatch, props.history, successCreate, successDelete]);

  const deleteHandler = (book) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteBook(book._id));
    }
  };
  const createHandler = () => {
    dispatch(createBook());
  };


  return (
    <div>
      <div className="row">
      <h1 className="font-bold text-[16px] lg:text-[24px]">SPE KHAZAR Books List</h1>
        <button type="button" className="primary p-[1rem]" onClick={createHandler}>
          Create Book
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
        <div className="tableMode">
          <table className="table">
            <thead>
              <tr className="tableHeader">
                <th>TITLE</th>
                <th>CATEGORY</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {books.map((book) => (
                <tr key={book._id}>
                  <td>{book.title}</td>
                  <td>{book.category}</td>

                  <td>
                    <button
                      type="button"
                      className="small edit p-[1rem]"
                      onClick={() =>
                        props.history.push(`/book/${book._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small delete p-[1rem]"
                      onClick={() => deleteHandler(book)}
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
export default memo(BookListScreen);