import React, { useState } from 'react'
import './Signup.css'
import { logo } from '../utils/constants'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, {
            displayName: username,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className='Signup'>
      <img src={logo} alt=''/>
    <input 
     type='email' 
     onChange={e => setEmail(e.target.value)}
     placeholder='Email' 
     value={email}
     />

    <input 
     type='username' 
     onChange={e => setUsername(e.target.value)}
     placeholder='Username' 
     value={username}
     />
     
     <input 
     type='password' 
     onChange={e => setPassword(e.target.value)}
     placeholder='Password' 
     value={password}
     />
     <button onClick={handleSignUp}>Signup</button>
    </div>
  )
}

export default Signup
