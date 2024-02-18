import React from 'react'
import { card1, card2, card3, card4, mask, right2 } from '../index'

function MainBox3() {
  return (
    <>
      <div className="main-box3 grid grid-cols-2 m-0 p-0">
        <div className="main-box3-left">
          <img src={mask} alt="" />
          <div className="card-box-left-h">
            <h1>Explore More
             Product</h1>
          </div>
        </div>
        <div className="main-box3-right  gap-4 grid grid-cols-2 ">
          <div className="card-box">
              <img src={card1} alt="" />
              <div className='card-elms-1'>
               <p>Concetti Di-Lusso ALESANDRDO Luxury
                 Turkish Spa Towels and ganic Bamboo
                  Robes 12 PC set</p>
              </div>
              <div className="card-btn-p grid grid-cols-2 gap-0 ">
              <p>$199 <small>
                <s>$888
                </s></small></p>
              <button>ADD CART</button>
             
            </div>
          </div>
          <div className="card-box">
            <img src={card2} alt="" />
            <div className='card-elms-1'>
            <p>Concetti Di-Lusso CAPPY Organic
              Turkish Cotton - Set of 4 in Gift Box
            </p>
            </div>
            <div className="card-btn-p grid grid-cols-2 gap-1 ">
              <p>$199 <small>
                
                <s>$888</s>
                  </small></p>
              <button>ADD CART</button>
            </div>
          </div>
          <div className="card-box">
            <img src={card3} alt="" />
            <div className='card-elms-1'>
            <p>Concetti Di-Lusso Luxury 100% Turkish
              Bamboo Shawl Spa Robe in Premium
              Gift Box</p>
              </div>
              <div className="card-btn-p grid grid-cols-2 gap-1 ">
              <p>$199 <small> <s>$888</s>
                </small></p>
              <button>ADD CART</button>
            </div>
          </div>
          <div className="card-box">
            <img src={card4} alt="" />
            <div className='card-elms-1'>
            <p>Concetti Di-Lusso ANNA Luxury 100%
              Turkish Organic Cotton VIP Spa
              Robe/Towels 10 PC Set </p>
              </div>
              <div className="card-btn-p grid grid-cols-2 gap-1 ">
              <p>$199 <small> <s>$888</s></small></p>
              <button>ADD CART</button>
            </div>
          </div>

        </div>

      </div>

      <div className="heading-2">
        <button>SHOW MORE </button>
      </div>

      <div className="box-2 grid grid-cols-2  gap-1 m-0 p-0"> 
  
      <div className="left-2 ">
        <div className="left-2-c">
        <h1>Organic Cotton and Bamboo</h1>
        <p>Designed to please you with the best of Turkish’s heritage
in fabrics.Made from bamboo and cotton fibers, these
towels gathers the best from two worlds to offer soft,
super-absorbent fabric that is also antibacterial
thanks to the natural properties of bamboo.</p>
<button>SHOP NOW </button>
</div>
      </div>
      <div className="right-2 ">
      <img src={right2} alt="" />
      </div>
      </div>

      <div className="heading-3">
        <p>Trending Product</p>
      </div>
    </>
  )
}

export default MainBox3
