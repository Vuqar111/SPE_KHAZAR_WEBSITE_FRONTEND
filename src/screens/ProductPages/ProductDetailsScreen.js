import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const ProductScreen = (props)  =>{
  const url = window.location.href;
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const createMarkup = () => {
    return { __html: product.description };
  };

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
              <div className="mt-[20px] w-[100%] h-[30vh] lg:h-[65vh]">
                <img
                  className="w-[100%] h-[100%] rounded-[5px] object-cover bg-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="p-[15px]">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between w-[auto] date">
                  <div>
                    <h2 className="font-bold text-[22px] lg:text-[30px]">
                      {product.name}
                    </h2>
                    <p className="font-bold opacity-[0.8]">
                      {product.location} - {product.category} -{product.type}
                    </p>
                  </div>

                  <p className="font-bold text-[#0067B1]">{product.author}</p>
                </div>
              </div>
              <div className="w-[100%] pl-[15px] pr-[15px] m-[auto]  flex justify-between">
                <div className="flex items-center w-[auto] date">
                  <div>
                    <MdDateRange />
                  </div>
                  <div>{new Date(product.createdAt).toDateString()}</div>
                  
                </div>
                <div className="flex justify-between  items-center  text-[white]">
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
              <p
                className="w-[100%] text-[18px] my-[20px] mx-[18px]"
                dangerouslySetInnerHTML={createMarkup()}
              ></p>
              <hr />
              <div className="w-[100%] p-[15px] m-[auto]  flex justify-between ">
                {product.deadline > new Date().toISOString().slice(0, 10) ? (
                  <a href={product.registerLink} target="_blank" rel="noreferrer">
                    <div className="applybtn">
                      <button>Registerr for event</button>
                    </div>
                  </a>
                ) : (
                  <div className="applybtn">
                    <button>Deadline is finished</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}


export default memo(ProductScreen)