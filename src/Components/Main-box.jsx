import React from 'react'
import { mainimg } from '../index'

function Mainbox() {
  return (
   <>
   <div className="main-img">
    <img src={mainimg} alt="" />
    <div className='main-img-1s'>
    <h1 className='text-bold'> Beautiful Color Contarast !</h1>
    </div>
    <div className='main-img-2s'>
     <p>Over 50 Collections to Choose for !</p>
    </div>
    <div className="main-img-3s">
    <button type="button">SHOP NOW &rarr;</button>
    </div>
    
   </div>




   </>
  )
}

export default Mainbox
