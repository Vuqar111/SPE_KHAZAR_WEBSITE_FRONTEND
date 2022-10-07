import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";

export default function Product(props) {
  const { blog } = props;
  return (
    <Wrapper>
      <div key={blog._id} className="card">
        <Link to={`/blog/${blog._id}`}>
          <img className="medium" src={blog.image} alt={blog.title} />
        </Link>
        <div className="card-body">
          <Link to={`/blog/${blog._id}`}>
            <h2 className="mt-[5px] font-bold text-[15px]">{blog.title}</h2>
          </Link>
          <div className="flex justify-between items-center w-[100%]">
            <div className="blog-icon">
              <BsPersonFill />
              <div>{blog.author}</div>
            </div>
            <div className="card-date">{new Date(blog.createdAt).toDateString()}</div>
          </div>
            <div className="card-text">{blog.description}</div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
.card {
  width: 30vw;
  height: 360px;
  background: #f5f5f5;
  padding: .5em;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin: 15px 20px;
}

/* .card:hover {
  transform: scale(0.95);
  transition: all 0.3s;
  border: #0067B1 0.2em solid;
} */

.blog-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #242424;
  padding: 0 5px;
}
.blog-icon > div {
  margin-left: 5px;
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