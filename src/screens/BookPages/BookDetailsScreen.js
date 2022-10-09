import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsBook } from "../../common/actions/bookActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { MdDateRange } from "react-icons/md";

export default function BookDetailsScreen(props) {
  const dispatch = useDispatch();
  const bookId = props.match.params.id;
  const bookDetails = useSelector((state) => state.bookDetails);
  const { loading, error, book } = bookDetails;

  useEffect(() => {
    dispatch(detailsBook(bookId));
  }, [dispatch, bookId]);

  return (
    <React.Fragment>
      <div className="w-[90%] m-[auto] center">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
            <div className="w-[100%] flex justify-between  flex-col lg:flex-row">
              <div className="mt-[20px] w-[100%]">
                <img className="w-[100%] h-[100%]" src={book.image} alt={book.title} />
              </div>
              <div className="w-[100%] lg:ml-[20px] ">
                <div className="lg:p-[20px] pt-[10px]">
                  <h2 className="font-bold text-[30px]">{book.title}</h2>
                  <h4 className="font-bold text-[16px] pt-[5px]">Author: <span className="opacity-[0.7]">{book.author}</span></h4>
                  <h4 className="font-bold text-[16px] pt-[5px]">Category:  <span className="opacity-[0.7]">{book.category}</span></h4>
                  <p className="pt-[10px]">{book.description}</p>
                </div>
                <hr />
                <div className="datasection w-[100%] p-[15px] m-[auto]  flex justify-between">
                  <div className="flex items-center justify-between w-[auto] date">
                    <div>
                      <MdDateRange />
                    </div>
                    <div className="font-bold ">
                      {book.createdAt.slice(0, 10)}
                    </div>
                  </div>

                  <div className="applybtn  bg-[#256F98] p-[10px] text-[white]">
                    <div className="cursor-pointer">
                      <a href={book.url} download>Download Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
