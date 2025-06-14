import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createGallery,
  deleteGallery,
  listGalleries,
} from "../../common/actions/galleryActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import {
  GALLERY_CREATE_RESET,
  GALLERY_DELETE_RESET,
} from "../../common/constants/galleryConstants";

const GalleryListScreen = (props) => {
  const galleryList = useSelector((state) => state.galleryList);
  const { loading, error, galleries } = galleryList;

  const galleryCreate = useSelector((state) => state.galleryCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    gallery: createdGallery,
  } = galleryCreate;

  const galleryDelete = useSelector((state) => state.galleryDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = galleryDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: GALLERY_CREATE_RESET });
      props.history.push(`/gallery/${createdGallery._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: GALLERY_DELETE_RESET });
    }
    dispatch(listGalleries());
  }, [createdGallery, dispatch, props.history, successCreate, successDelete]);

  const deleteHandler = (gallery) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteGallery(gallery._id));
    }
  };
  const createHandler = () => {
    dispatch(createGallery());
  };

  return (
    <div style={{minHeight: "60vh"}}>
      <div className="row">
      <h1 className="font-bold text-[16px] lg:text-[24px]">SPE KHAZAR Gallery List</h1>
        <button type="button" className="primary p-[1rem]" onClick={createHandler}>
          Create Gallery-Image
        </button>
      </div>

      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="tableMode">
          <table className="table">
            <thead>
              <tr className="tableHeader">
                <th>TITLE</th>
                <th>IMAGE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {galleries.map((gallery) => (
                <tr key={gallery._id}>
                
                  <td>{gallery.title}</td>
                  <td>{gallery.image}</td>
                  <td>
                    <button
                      type="button"
                      className="small edit p-[1rem]"
                      onClick={() =>
                        props.history.push(`/gallery/${gallery._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small delete p-[1rem]"
                      onClick={() => deleteHandler(gallery)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}


export default memo(GalleryListScreen)