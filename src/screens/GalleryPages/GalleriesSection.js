import React, { useState, useEffect } from "react";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listGalleries } from "../../common/actions/galleryActions";
import styled from "styled-components";

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
      <h1 className="font-bold text-[30px] w-[100%] p-[10px] text-center mb-[10px] bg-[#f5f5f5] eventHeader">Teams</h1>
      <Wrapper>
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
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  `;