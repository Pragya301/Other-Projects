import React, { useState } from 'react'
import './Login.css'
import { logo } from '../utils/constants'
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className='Login'>
     <img src={logo} alt=''/>
     <input 
     type='email' 
     onChange={e => setEmail(e.target.value)}
     placeholder='Email' 
     value={email}
     />
     <input 
     type='password' 
     onChange={e => setPassword(e.target.value)}
     placeholder='Password' 
     value={password}
     />
     <button onClick={handleLogin}>Log in</button>

    </div>
  )
}

export default Login
