import React, { useState, useEffect } from "react";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import Book from '../../components/BoxComponents/Book';
import { useDispatch, useSelector } from "react-redux";
import { listBooks } from "../../common/actions/bookActions";
import aboutimg from "../../assets/images/library.jpg";
export default function HomeScreen() {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const { loading, error, books } = bookList;
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="relative">
            <img
              className="w-[100%] h-[100%] max-h-[250px] lg:max-h-[400px] object-cover"
              src={aboutimg}
              alt="aboutImage"
            />
            <div className="w-[90%] lg:w-[70%] m-[auto] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute text-[85px] text-[white] font-bold text-center">
              <h2 className="text-[20px] lg:text-[36px]">
                Accelerating research discovery to shape a better future
              </h2>
              <h1 className="text-[16px] lg:text-[40px] font-bold lg:block hidden">
                Today's research, tomorrow's innovation
              </h1>
              <input
                type="text"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
                className="w-[100%]  px-[10px] text-[black] py-[15px] text-[16px] outline-none"
                placeholder="Search books by name"
              />
            </div>
          </div>

          <div className="mt-[40px] lg:mt-[80px]">
            <div className="w-[95%] lg:w-[90%] m-[auto] grid grid-cols-2 lg:grid-cols-4 gap-[15px]">
              {books
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })

                .map((book, index) => (
                  <Book key={index} book={book}/>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
