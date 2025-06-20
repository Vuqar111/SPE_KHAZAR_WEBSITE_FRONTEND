import React, { useEffect, memo } from "react";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../../common/actions/blogActions";
import Blog from "../../components/BoxComponents/Blog";
const BlogDetailsScreen = ()  => {
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  
  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);


  return (
    <div className="wrapper">
      <div className="flex justify-center items-center bg-[#f5f5f5] text-center lg:text-4xl text-[24px] font-bold p-[10px] ">
        <p className="text-center text-[#0067b1] ">Blogs</p>
      </div>
      <div className="w-[90%] m-[auto] flex justify-between mt-[20px] w-[100%] h-[auto] p-[0px]">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="w-[100%] grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
            {blogs.map((blog) => (
              <Blog key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(BlogDetailsScreen);