import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { detailsGallery, updateGallery } from "../../common/actions/galleryActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { GALLERY_UPDATE_RESET } from "../../common/constants/galleryConstants";

export default function GalleryEditScreen(props) {
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
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;


  return (
    <div style={{minHeight: "60vh"}}>
      <form className="w-[90%] m-[auto]" onSubmit={submitHandler}>
        <div>
          <h1>Create / Edit Gallery {galleryId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
              <div className="editmainform">


            <div>
              <label htmlFor="name">Title</label>
              <input
                id="title"
                type="text"
                placeholder="Enter name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
          
            <div>
              <label></label>
              <button className="primary" type="submit">
                Update/Create Gallery
              </button>
            </div>
              </div>
          </>
        )}
      </form>
    </div>
  );
}
