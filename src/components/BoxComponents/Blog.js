import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";

const Blog = (props) => {
  const { blog } = props;
  const createMarkup = () => {
    return { __html: blog.description.slice(0, 70)+"..." };
  }
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
          <div className="card-text" dangerouslySetInnerHTML={createMarkup()}></div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Blog;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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