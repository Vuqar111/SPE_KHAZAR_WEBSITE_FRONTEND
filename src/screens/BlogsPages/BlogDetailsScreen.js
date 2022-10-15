import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsBlog } from "../../common/actions/blogActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { MdDateRange } from "react-icons/md";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const BlogScreen = (props) => {
  const dispatch = useDispatch();
  const blogId = props.match.params.id;
  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;

  useEffect(() => {
    dispatch(detailsBlog(blogId));
  }, [dispatch, blogId]);

  const [width, setWidth] = useState(0);
  const url = window.location.href;
  const pagewith = window.innerWidth;
 
  const createMarkup = () => {
    return { __html: blog.description };
  }
  
  useEffect(() => {
    if (pagewith > 768) {
      setWidth(30);
    } else {
      setWidth(20);
    }
  });
  return (
    <React.Fragment>
      <div className="w-[95%] lg:w-[80%] m-[auto]">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="">
            <div>
              <div className="w-[100%] md:h-[30vh] lg:h-[50vh] mt-[20px]">
                <img
                  className="w-[100%] h-[100%] bg-cover object-cover rounded-[5px]"
                  src={blog.image}
                  alt={blog.title}
                />
              </div>
              <div className="p-[15px]">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between w-[auto]">
                  <div>
                  <h2 className="font-bold text-[22px] lg:text-[30px]">{blog.title}</h2>
                  <p className="font-bold opacity-[0.8]">{blog.category}</p>
                  </div>
                  <p className="font-bold text-[#0067B1] md:text-lg text-sm">{blog.author}</p>
                </div>
              </div>
              <div className="w-[100%] pl-[15px] pr-[15px] m-[auto]  flex justify-between ">
                <div className="flex items-center w-[auto]">
                  <div>
                    <MdDateRange />
                  </div>
                  <div>
                    {new Date(blog.createdAt).toDateString()}
                  </div>
                </div>
                <div className="flex justify-between  items-center   text-[white]">
                  <div className="ml-[5px] cursor-pointer  pointer">
                    <FacebookShareButton url={url}>
                      <FacebookIcon size="30px" />
                    </FacebookShareButton>
                  </div>
                  <div className="ml-[5px] cursor-pointer  pointer">
                    <TwitterShareButton url={url}>
                      <TwitterIcon size="30px" />
                    </TwitterShareButton>
                  </div>
                  <div className="ml-[5px] cursor-pointer  pointer">
                    <WhatsappShareButton url={url}>
                      <WhatsappIcon size="30px" />
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
              <hr />
              <p className="w-[95%] md:text-lg text-sm my-[20px] mx-[5px]"  dangerouslySetInnerHTML={createMarkup()}>
              </p>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}




export default memo(BlogScreen);