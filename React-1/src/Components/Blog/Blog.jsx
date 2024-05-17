import React from 'react'
import product from './Blog-product'
import "./Blog.css"
function Blog() {
  return (
    <>
    
<div className="products">
{product.map ((item)=>
    <div className="maal">
                <div className="imgbx">
                  <img src={item.image} alt="" style={{height: "100%",width: "100%" }  }/>
                </div>
                <div className="titlebox">
                    <div className="title"><a href="" className="clr">Title Goes Here</a></div>
                    <div className="price">$25.75</div>
                </div>
                <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quo!</div>
                <div className="review"></div>
            </div>
            
          )}
          </div>
       </>
  )
 
}

export default Blog