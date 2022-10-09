import React from 'react'
import '../../assets/css/pagenotfound.css';
import {Link} from 'react-router-dom';
const PageNotFound = () => {
  return (
    <div id="not-found">
    <div class="circles">
      <p>404 <br/>
       <small>PAGE NOT FOUND</small>
      </p>
      <Link to="/">
      <div className='w-[60%] m-[auto] text-[white] bg-[#0067B1] p-[10px] py-[15px]'>Come back to home page</div>
      </Link>
      <span class="circle big"></span>
      <span class="circle med"></span>
      <span class="circle small"></span>
    </div>
  </div>
  )
}

export default PageNotFound