import React, { useEffect,memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createProduct,
  deleteProduct,
  listProducts,
} from "../../common/actions/productActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import {
  PRODUCT_CREATE_RESET,
  PRODUCT_DELETE_RESET,
} from "../../common/constants/productConstants";



const ProductListScreen = (props) =>{
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      props.history.push(`/event/${createdProduct._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(listProducts());
  }, [createdProduct, dispatch, props.history, successCreate, successDelete]);

  const deleteHandler = (product) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteProduct(product._id));
    }
  };
  const createHandler = () => {
    dispatch(createProduct());
  };


  return (
    <div style={{ minHeight: "60vh" }}>
      <div className="row">
        <h1 className="font-bold text-[16px] lg:text-[24px]">SPE KHAZAR Events List</h1>
        <button
          type="button"
          className="bg-[#0067B1] m-[10px] text-white p-[10px]"
          onClick={createHandler}
        >
          Create Event
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
                <th>NAME</th>
                <th>AUTHOR</th>
                <th>LOCATION</th>
                <td>TYPE</td>
                <th>CATEGORY</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.author}</td>
                  <td>{product.location}</td>
                  <td>{product.type}</td>
                  <td>{product.category}</td>
                  <td>
                    <button
                      type="button"
                      className="small edit p-[1rem]"
                      onClick={() =>
                        props.history.push(`/event/${product._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small delete p-[1rem]"
                      onClick={() => deleteHandler(product)}
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

export default memo(ProductListScreen)