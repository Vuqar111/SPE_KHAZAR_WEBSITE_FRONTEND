import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
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
export default function BlogScreen(props) {
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

  
  useEffect(() => {
    if (pagewith > 768) {
      setWidth(30);
    } else {
      setWidth(20);
    }
  });
  return (
    <Wrapper>
      <div className="w-[80%] m-[auto] center">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="">
            <div>
              <div className="w-[100%] mt-[20px]">
                <img
                  className="blogimage"
                  src={blog.image}
                  alt={blog.title}
                ></img>
              </div>
              <div className="eventtitle">
                <div className="flex items-center justify-between w-[auto] date">
                  <h2>{blog.name}</h2>
                </div>
              </div>
              <div className="w-[100%] pl-[15px] pr-[15px] m-[auto]  flex justify-between datesection ">
                <div className="flex items-center w-[auto] date">
                  <div className="eventDetailDate">
                    <MdDateRange />
                  </div>
                  <div className="eventDetailDate">
                    {new Date(blog.createdAt).toDateString()}
                  </div>
                </div>
                <div className="flex justify-between  items-center  sharecontainer    text-[white]">
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
              <p className="eventdesc">{blog.description}</p>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  .productname {
    font-size: 45px;
    color: black;
    padding: 0px;
    margin: 0px;
  }
  .eventdesc {
    font-size: 18px;
    width: 100%;
    margin: 20px 5px;
  }
  .productprice {
    font-weight: bold;
    font-size: 40px;
  }
  .blogimage {
    width: 100%;
    max-height: 500px;
    height: 100%;
    border-radius: 5px;
    background-size: cover;
    object-fit: cover;
  }
  .eventtitle {
    padding: 15px;
  }
  .eventtitle h2 {
    font-size: 30px;
    font-weight: bold;
  }
  .applybtn {
    border: 2px solid #0067b1;
    color: #0067b1;
    padding: 5px 8px;
    font-weight: bold;
    transition: all 0.3s ease;
  }
  .applybtn:hover {
    background-color: #0067b1;
    color: white;
    transition: all 0.3s ease;
  }
  @media (max-width: 768px) {
    .center {
      width: 95%;
    }
    .productname {
      font-size: 15px;
    }
    .eventtitle h2 {
      font-size: 18px;
    }
  }
`;
