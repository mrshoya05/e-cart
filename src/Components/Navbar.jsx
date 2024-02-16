import React from 'react'
import { love, search, cart} from '../index'


function Navbar() {
    return (
        <>
            <div className='m-0  nav-bar grid grid-cols-4  gap-4'>
                <div className=' nav-bar-1s'>
                    <p>CONCETTI DI-LUSSO</p>
                </div>

                <div className='nav-bar-2s'>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li className="dropdown">
                                <a href="#">Towel &#9662; </a>
                                <div className="dropdown-content">
                                    <a href="#">Demo1</a>
                                    <a href="#">Demo2</a>
                                    <a href="#">Demo3</a>
                                </div>
                            </li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="nav-bar-3s">
                    <div className="icon">
                        <img src={search} alt="" />
                    </div>
                    <div className="icon">
                        <img src={love} alt="" />
                    </div>
                    <div className="icon">
                        <img src={cart} alt="" />
                    </div>
                </div>

                {/* button of nav bar code  */}
                <div className="nav-bar-4s">
                    <button type='button'>SIGN IN </button>
                </div>

                {/* main box end  */}
            </div>
        </>
    )
}

export default Navbar
