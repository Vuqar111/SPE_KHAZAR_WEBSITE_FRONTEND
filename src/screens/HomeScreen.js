import React, { useEffect } from "react";
import Product from "../components/BoxComponents/Product";
import LoadingBox from "../components/HelperComponents/LoadingBox";
import MessageBox from "../components/HelperComponents/MessageBox";
import Blog from "../components/BoxComponents/Blog";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../common/actions/productActions";
import { listBlogs } from "../common/actions/blogActions";
import Testimontials from "../components/Testimontials";
import Slider from "../components/HomeSlider/Slider";


export default function HomeScreen() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const blogList = useSelector((state) => state.blogList);
  const { loadingblog, errorblog, blogs } = blogList;


  useEffect(() => {
    dispatch(listProducts());
    dispatch(listBlogs());
  }, [dispatch]);

  return (
    <div>
      <div className="h-[auto] flex">
        <Slider />
      </div>
      <div className="w-[90%] m-[auto] mt-[25px] text-[20px] hometitle">Our Latest Events</div>
      <div className="w-[100%] m-[auto] flex justify-between mt-[20px] events">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="recordcontainer">
            {products?.slice(0, 3)?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
      <Testimontials />
      <div className="w-[90%] m-[auto] mt-[25px] text-[20px] hometitle">Our Latest Blogs</div>
      <div className="w-[100%] m-[auto] flex justify-between mt-[20px] events">
        {loadingblog ? (
          <LoadingBox></LoadingBox>
        ) : errorblog ? (
          <MessageBox variant="danger">{errorblog}</MessageBox>
        ) : (
          <div className="recordcontainer">
            {blogs?.slice(0, 3)?.map((blog) => (
              <Blog key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
