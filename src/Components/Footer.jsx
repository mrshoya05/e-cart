import React from 'react'

function Footer() {
  return (
    <>
    <div className="w-full bg-gray-200 grid grid-cols-3 gap-2">
        <div className="foot-col-1">
       <h2>Quick links</h2>
       <ul>
        <li>Privacy Policy</li>
        <li>Return Policy</li>
        <li>Terms and Service </li>
        <li>Contact</li>
       </ul>
        </div>
        <div className="foot-col-2">
          <h2>Contact us</h2>
          <p> Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Quos, natus.</p>
             <p>demo1</p>
             <p>demo2</p>
          </div>
          <div className="foot-col-3">
          <h2>We accepts </h2>
          <div className="foot-img ">
            <img src="" height={20} width={15} alt="rupey" />
            <img src="" height={20} width={15} alt="paypal" />
            <img src="" height={30} width={15} alt="cash" />
            <img src="" height={20} width={15} alt="cash2" />
            <hr/>
            <p>copt right issue || ok its working</p>
          </div>
          </div>
    </div>
    </>
  )
}

export default Footer
