import React, {memo} from "react";
import styled from "styled-components";

const  Gallery = (props) => {
  const { gallery } = props;
  return (
    <Wrapper>
      <div key={gallery._id} className="card">
        <div key={gallery.id} className="card">
          <a href={`/gallery/${gallery._id}`}>
            <img className="medium" src={gallery.image} alt={gallery.title} />
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default memo(Gallery);

const Wrapper = styled.div`
.card {
  width: 350px;
  height: auto;
  background: blue;
  margin-top: 20px;
  padding: 10px;
}
img {
  width: 370px;
  height: 270px;
}
@media (max-width: 768px) {
  .card {
    width: 100%;
  }
  img {
    width: 100%;
    height: 200px;
  }
  h2 {
    font-size: 20px;
  }
}
 
`