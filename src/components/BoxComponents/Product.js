import React, { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Product = (props) => {
  const { product } = props;
  const createMarkup = () => {
    return { __html: product.description.slice(0, 70) + "..." };
  }
  return (
    <Wrapper>
      <div key={product.id} className="card">
        <Link to={`/event/${product._id}`}>
          <div className="imgBox" to={`/event/${product._id}`}>
            <img className="medium" src={product.image} alt={product.name} />
          </div>
          <div className="card-body">
            <h2 className="mt-[5px] font-bold text-[15px]">{product.name}</h2>
            <div className="card-date">{new Date(product.createdAt).toDateString()}</div>
            <div className="card-text" dangerouslySetInnerHTML={createMarkup()}></div>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
}

export default memo(Product);

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
  .card {
    width: 100%;
    height: 55vh;
    border-bottom: 1px solid #c4c4c4;
    margin: 10px;
    overflow: hidden;
    box-shadow: 0 1px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.5s ease-in-out;
  }
  
  .card:hover {
    box-shadow: 0 1px 5px #0067B1, 0 1px 2px #0067B1;
    transition: all 0.5s ease-in-out;
  }

  .card-body h2 {
    text-transform: uppercase;
    font-size: 1em;
    font-weight: 600;
    color: #0067B1;
  }

  .card-body {
    margin: 10px;
   
  }
  .card-date {
    color: #0067B1;
    font-size: 12px;
    margin: 8px 0;
  }
  .card-text {
    font-weight: 600;
    color: rgb(88, 87, 87);
    margin: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .card img {
    height: 35vh;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .card {
      height: 100%;
      
    }
    .card img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
