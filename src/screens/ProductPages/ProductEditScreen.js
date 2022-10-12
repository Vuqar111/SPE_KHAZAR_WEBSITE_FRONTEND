import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  detailsProduct,
  updateProduct,
} from "../../common/actions/productActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { PRODUCT_UPDATE_RESET } from "../../common/constants/productConstants";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default function ProductEditScreen(props) {
  const productId = props.match.params.id;
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [registerLink, setRegisterLink]= useState("");

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push("/eventlist");
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setAuthor(product.author);
      setImage(product.image);
      setLocation(product.location);
      setType(product.type);
      setCategory(product.category);
      setRegisterLink(product.registerLink);
      setDescription(product.description);
    }
  }, [product, dispatch, productId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        author,
        image,
        category,
        location,
        type,
        description,
        registerLink,
      })
    );
  };



  return (
    <div style={{ minHeight: "60vh" }}>
      <form className="w-[90%] m-[auto]" onSubmit={submitHandler}>
        <div style={{ padding: "10px" }}>
          <h1 className="text-center text-[24px] font-bold">Edit Event ID: {productId}</h1>
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
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="author">Author</label>
                <input
                  id="author"
                  type="text"
                  placeholder="Enter author name"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                ></input>
              </div>

              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="category">Category</label>
                <input
                  id="category"
                  type="text"
                  placeholder="Enter category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </div>

              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="category">Location</label>
                <input
                  id="location"
                  type="text"
                  placeholder="Enter Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                ></input>
              </div>

              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="category">Type</label>
                <select
                  placeholder="Enter Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Choose your event type</option>
                  <option value="Offline">Offline</option>
                  <option value="Online">Online</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div className="w-[100%] flex items-center justify-between mt-[15px]">
                <label htmlFor="registerlink">Register Link</label>
                <input
                  id="register"
                  type="text"
                  placeholder="Enter Register Link"
                  value={registerLink}
                  onChange={(e) => setRegisterLink(e.target.value)}
                ></input>
              </div>

              <div className="w-[100%] mt-[15px]">
                <label>Description</label>
                <CKEditor
                    editor={ ClassicEditor }
                    data={description}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setDescription(data)
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
              </div>
             
              <div>
                <label></label>
                <button className="w-[100%] p-[10px]" type="submit">
                  Update / Cretate Event
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
