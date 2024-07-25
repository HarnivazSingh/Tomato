import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState]=useState("Sign Up")
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your Name'/>}
                
                <input type="email" placeholder='Your email'/>
                <input type="password" placeholder='Password'/>
            </div>
            <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By Continuing,  I agree to the terms of use & privacy policy</p>
            </div>
            {currState==="Login"?<p>Want to create a new Account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
            <p>Already have an Account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup
