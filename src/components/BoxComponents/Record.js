import React from "react";
const RecordItem = ({ record }) => {
  return (
    <React.Fragment>
      <div className="w-[400px] cardModel">
        <div className="w-[100%] h-[230px] relative">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={record.image}
            alt=""
          />
          <a href={record.url}>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[white] bg-[#0067B1] p-[20px] rounded-[30px] hover:scale-[1.1] hover:transition-[1.1s] transition-[1.1s] cursor-pointer">
              Play
            </div>
          </a>
        </div>
        <div className="p-[10px]">
          <h2 className="font-bold text-[18px]  p-[5px]">{record.title}</h2>
          <p className="text-[15px] pl-[5px] opacity-[0.7] font-bold">{record.author}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecordItem;
