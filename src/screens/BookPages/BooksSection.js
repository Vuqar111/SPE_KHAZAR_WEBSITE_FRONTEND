import React, { useState, useEffect } from "react";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listBooks } from "../../common/actions/bookActions";
import aboutimg from "../../assets/images/library.jpg";
import { Link } from "react-router-dom";
export default function HomeScreen() {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const { loading, error, books } = bookList;
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);

  console.log(books);

  return (
    <React.Fragment>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="relative">
            <img
              className="w-[100%] h-[100%] max-h-[250px] lg:max-h-[400px]"
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
                className="w-[100%]  px-[10px]  py-[5px] text-[16px] border-none outline-none"
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

                .map((book) => (
                  <div
                    key={book.id}
                    className="w-[180px] lg:w-[320px]  mt-[10px] p-[10px] cardModel cursor-pointer"
                  >
                    <div className="w-[160px] lg:w-[300px] h-[250px] lg:h-[350px]">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-[100%] h-[100%]"
                      />
                    </div>

                    <div>
                      <h2 className="font-bold text-[16px] lg:text-[20px] pt-[5px]">
                        {book.title}
                      </h2>
                      <p className="text-[12px] lg:text-[16px] font-italic opacity-[0.7]">
                        Adventure
                      </p>
                      <div className="text-[15px] mt-[5px] p-[10px] bg-[#256F98] text-[white] w-[100%] downloadbtn">
                        <Link to={`/book/${book._id}`}>See Details</Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
