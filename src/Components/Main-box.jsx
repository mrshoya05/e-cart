import React from 'react'
import { mainimg } from '../index'

function Mainbox() {
  return (
   <>
   <div className="main-img">
    <img src={mainimg} alt="" />
    <h1 className='text-bold'> Beautiful Color </h1>
    <h2>Contarast !</h2>
    <h5> Over 50 plus Collections to choose for !</h5>
    <button type="button">Shop now &rarr;</button>
   </div>

   {/* after main image  */}
<div className=" mx-4 grid grid-cols-3 gap-3">
  <div className="card">card 1</div>
  <div className="card">card 1</div>
  <div className="card">card 1</div>
</div>

   </>
  )
}

export default Mainbox
