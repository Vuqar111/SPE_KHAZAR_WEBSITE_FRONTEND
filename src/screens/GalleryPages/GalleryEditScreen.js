import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsGallery, updateGallery } from "../../common/actions/galleryActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { GALLERY_UPDATE_RESET } from "../../common/constants/galleryConstants";

const GalleryEditScreen = (props) => {
  const galleryId = props.match.params.id;
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const galleryDetails = useSelector((state) => state.galleryDetails);
  const { loading, error, gallery } = galleryDetails;

  const galleryUpdate = useSelector((state) => state.galleryUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = galleryUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push("/gallerylist");
    }
    if (!gallery || gallery._id !== galleryId || successUpdate) {
      dispatch({ type: GALLERY_UPDATE_RESET });
      dispatch(detailsGallery(galleryId));
    } else {
      setTitle(gallery.title);
      setImage(gallery.image);
    }
  }, [gallery, dispatch, galleryId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateGallery({
        _id: galleryId,
        title,
        image,
      })
    );
  };



  return (
    <div >
      <form className="w-[90%] m-[auto] mt-[20px]" onSubmit={submitHandler}>
        <div>
          <h1 className="text-center text-[16px] lg:text-[24px] font-bold">Create / Edit Gallery {galleryId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
              <div className="editFormContainer">


            <div className="w-[100%] flex items-center justify-between mt-[15px]">
              <label htmlFor="name">Title</label>
              <input
                id="title"
                type="text"
                placeholder="Enter name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>

            <div className="w-[100%] flex items-center justify-between mt-[15px]">
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
          
            <div className="w-[100%]">
                <button className="primary bg-[#0067b1] w-[100%] p-[10px]" type="submit">
                  Update / Cretate Gallery Photo
                </button>
              </div>
              </div>
          </>
        )}
      </form>
    </div>
  );
}


export default memo(GalleryEditScreen);