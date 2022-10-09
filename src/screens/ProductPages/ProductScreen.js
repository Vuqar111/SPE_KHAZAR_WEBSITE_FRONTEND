import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { detailsProduct } from "../../common/actions/productActions";
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

export default function ProductScreen(props) {
  const url = window.location.href;
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

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
              <div className="mt-[20px] eventimgdiv">
                <img
                  className="blogimage object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="eventtitle">
                <div className="flex items-center justify-between w-[auto] date">
                  <h2>{product.name}</h2>
                  <p className="font-bold text-[#0067B1]">{product.author}</p>
                </div>
              </div>
              <div className="w-[100%] pl-[15px] pr-[15px] m-[auto]  flex justify-between datesection ">
                <div className="flex items-center w-[auto] date">
                  <div className="eventDetailDate">
                    <MdDateRange />
                  </div>
                  <div className="eventDetailDate">
                    {new Date(product.createdAt).toDateString()}
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
              <p className="eventdesc">{product.description}</p>
              <hr />
              <div className="w-[100%] p-[15px] m-[auto]  flex justify-between datesection ">
                <a href="">
                <div className="applybtn">
                  <button>Register for event</button>
                </div>
                </a>
                
              </div>
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
