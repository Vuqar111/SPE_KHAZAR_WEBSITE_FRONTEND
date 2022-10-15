import React, {memo} from "react";
const Book = (props) => {
  const { book } = props;
  return (
    <React.Fragment>
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
            {book.category}
          </p>
          <a href={book.url} target="_blank">
            <div className="text-[15px] mt-[5px] p-[10px] bg-[#256F98] text-[white] w-[100%] downloadbtn">
              Download Now
            </div>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default memo(Book);