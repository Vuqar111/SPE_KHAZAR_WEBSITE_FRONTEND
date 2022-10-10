import React, { useState, useEffect } from "react";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listGalleries } from "../../common/actions/galleryActions";

export default function GalleriesSection() {
  const dispatch = useDispatch();
  const galleryList = useSelector((state) => state.galleryList);
  const { loading, error, galleries } = galleryList;
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState("");
  useEffect(() => {
    dispatch(listGalleries());
  }, [dispatch]);

  const getImg = (imgurl) => {
    setTempimgSrc(imgurl);
    setModel(true);
  };
  return (
    <>
       <div className="flex justify-center items-center bg-[#f5f5f5] text-center lg:text-4xl text-[24px] font-bold p-[10px] ">
        <p className="text-center text-[#0067b1] ">Gallery</p>
      </div>
      <div className="w-[100%] min-h-[60vh] m-[auto] flex items-center flex-col">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
            <div className={model ? "model open" : "model"}>
              <div className="modelbox">
                <img src={tempimgSrc} alt="img" />
                <div className="closebtn" onClick={() => setModel(false)}>
                  <i className="fas fa-times"></i>
                </div>
              </div>
            </div>
            <div className="gallery">
              {galleries.map((item) => {
                return (
                  <img
                    src={item.image}
                    alt="img"
                    className="pics"
                    onClick={() => getImg(item.image)}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

