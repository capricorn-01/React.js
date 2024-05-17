import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {

  return(
    <div className="home">
      <div className="img">
        <div className="stx"><b>Best Offer</b></div>
        <div className="stx2"><b>NEW ARRIVALS ON SALE</b></div>
      </div>

      <div className="content">
        <div className="cnt1">Latest Products</div>
        <div className="cnt2"><Link to='/View'> View all Products</Link>
        </div>
      </div>

      <div className="products">
        <div className="maal">
          <div className="imgbx"></div>
          <div className="titlebox">
            <div className="title"><a href="" className="clr">Title Goes Here</a></div>
            <div className="price">$25.75</div>
          </div>
          <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quo!</div>
          <div className="review"></div>
        </div>
      </div>


    </div>
)
}

export default Home