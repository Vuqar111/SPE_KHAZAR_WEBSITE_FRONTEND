import React, {memo} from "react";
const RecordItem = ({ record }) => {
  return (
    <React.Fragment>
      <div className="w-[100% lg:w-[400px] cardModel">
        <div className="w-[100%] h-[230px] relative">
          <iframe
            width="100%"
            height="100%"
            src={record.url}
            title={record.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-[10px]">
          <h2 className="font-bold text-[18px]  p-[5px]">{record.title}</h2>
          <p className="text-[15px] pl-[5px] opacity-[0.7] font-bold">
            {record.author}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default memo(RecordItem);
