import React, { useEffect } from "react";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../common/actions/productActions";
import Product from "../../components/BoxComponents/Product";
export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);


  return (
    <div>
      <div className="flex justify-center items-center bg-[#f5f5f5] text-center lg:text-5xl text-[18px] font-bold p-[10px]">
        <p className="text-center text-[#0067b1]">Events</p>
      </div>
      <div className="lg:w-[90%] m-[auto] flex justify-center mt-[10px] w-[100%] p-[0px]">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="w-[100%]  grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
