import React from 'react'
import './loginsignup.css'
import { useState} from 'react'
import { Link } from 'react-router-dom';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'


const LoginSignup = () => {

const [action,setAction] = useState("Login");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


  return (
    <div className='container'>
        <div className='header'>
            <div className='text'> {action} </div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="" />
            <input type="text" 
                   placeholder='Enter Your Name'
                   value={name}
                   onChange={(e) => setName(e.target.value)} 
            />
        </div>}
        
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" 
                   placeholder='Email' 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)} 
            />
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password"
                   placeholder='Password' 
                   value={password}
                   onChange={(e) => setPassword(e.target.value)} 
            />
        </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}

        <div className="submit-button">
        <Link to="/navbar"><button >Submit</button></Link>
        </div>
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>
                 Sign Up
                </div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>
                Login
                </div>
        </div>
    </div>
  )
}

export default LoginSignup
