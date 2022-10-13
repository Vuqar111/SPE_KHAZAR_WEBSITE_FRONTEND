import React, { useEffect } from "react";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listRecords } from "../../common/actions/recordActions";
import Record from "../../components/BoxComponents/Record";
export default function RecordsSection() {
  const dispatch = useDispatch();
  const recordList = useSelector((state) => state.recordList);
  const { loading, error, records } = recordList;

  useEffect(() => {
    dispatch(listRecords());
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-center items-center bg-[#f5f5f5] text-center lg:text-4xl text-[24px] font-bold p-[10px] ">
        <p className="text-center text-[#0067b1] ">Recordings</p>
      </div>
      <div className="w-[90%] h-[100%] m-[auto] flex justify-center mt-[40px] ">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="w-[100%] grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
            {records.map((record) => (
              <Record key={record._id} record={record} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
