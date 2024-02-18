import React from 'react'
import { foot1, foot2, foot3, foot4, foot5, foot6, foot7 } from '../index'

function Footer() {
  return (
    <>
      <div className="footer grid grid-cols-3 gap-2">
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
          <p>8385 South Allen Street,
            Suite 111,
            Sandy UT 84070</p>
          <p>801-462-6210</p>
          <p>Support@concetti-di-lusso.com</p>
        </div>
        <div className="foot-col-3">
          <h2>We accepts </h2>
          <div className="foot-img  grid grid-cols-4 gap-4">
            <div className="foot-imgs">
              <img src={foot1} alt="" />
            </div>
            <div className="foot-imgs">
              <img src={foot2} alt="" />
            </div>
            <div className="foot-imgs">
              <img src={foot3} alt="" />
            </div>
            <div className="foot-imgs">
              <img src={foot4} alt="" />
            </div>
            <div className="foot-imgs">
              <img src={foot5} alt="" />
            </div>
            <div className="foot-imgs">
              <img src={foot6} alt="" />
            </div>
            <div className="foot-imgs">
              <img src={foot7} alt="" />
            </div>
            <hr />
           
          </div>
          < hr />
          <p>© 2020, Concetti Di-Lusso Powered by Shopify</p>
        </div>
      </div>
    </>
  )
}

export default Footer
