import React from 'react'
import {img1, img2 , img3} from '../index'


function MainBox2() {
  return (
    <>
    <div className="main-box-2 grid grid-cols-3 gap-3">
  <div className="card">
    <img src={img1} alt="image" />
  </div>
  <div className="card">
    <img src={img2} alt="image" />
  </div>
  <div className="card">
    <img src={img3} alt="image" />
  </div>
</div>
    </>
  )
}

export default MainBox2
