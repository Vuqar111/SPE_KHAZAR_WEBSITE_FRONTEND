import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Product(props) {
  const { product } = props;
  return (
    <Wrapper>
      <div key={product.id} className="card">
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
        <div className="card-body">
          <Link to={`/product/${product._id}`}>
            <h2 className="font-bold text-[25px]">{product.name}</h2>
          </Link>
          <div className="card-date">{new Date(product.createdAt).toDateString()}</div>
          <div className="card-text">{product.description}...</div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
 .card {
  width: 30vw;
  height: 360px;
  padding: .5em;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin: 15px 20px;
  transition: all 0.5s;
}

.card:hover {
  transform: scale(0.96);
  transition: all 0.5s;
}

.card-body h2 {
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 600;
  color: #0067B1;
  padding: 10px 7px 0;
}
.card-date {
  font-size: 0.7em;
  color: #0067B1;
  padding: 0 7px;
  font-style: italic;
}
.card-text {
  font-weight: 600;
  color: rgb(88, 87, 87);
  margin: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
img {
  background-color: rgb(236, 236, 236);
  width: 100%;
  height: 220px;
  border-radius: 6px 6px 0 0;
}
@media (max-width: 768px) {
  .card {
    width: 90vw;
    margin: 10px 5px;
  }
}
`;
