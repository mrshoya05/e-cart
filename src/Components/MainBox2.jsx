import React from 'react'
import {img1, img2 , img3, } from '../index'


function MainBox2() {
  return (
    <>
    <div className="main-box-2 ">
      <div className="card grid grid-cols-3 ">
  <div className="card-p">
    <div className="card-c">
    <img src={img1} alt="image" />
    </div>
    <h3>Free Delivery</h3>
    <p>For all orders above $35</p>
  </div>
  <div className="card-p">
    
    <div className="card-c">
    <img src={img2} alt="image" />
    </div>
    <h3>Free Delivery</h3>
    <p>For all orders above $35</p>
    
  </div>
  <div className="card-p">
    <div className="card-c">
    <img src={img3} alt="image" />
    </div>
    <h3>Free Delivery</h3>
    <p>For all orders above $35</p>
    
  </div>
  </div>
</div>
<div className="heading-1">
  <div className="heading-1-c">
    <p>Feartured Product</p>
  </div>
</div>
    </>
  )
}

export default MainBox2
