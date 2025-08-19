import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { getFirestore,onSnapshot, collection, addDoc, orderBy, query, serverTimestamp} from 'firebase/firestore'
import { app } from '../firebase'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import './ChatBox.css'




const ChatBox = ({toggleChat}) => {

    return (
        <div>
        <div className="ChatBox">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas aperiam nulla voluptates animi! Libero ab ipsam architecto aperiam voluptate.</p>

    <button className="close-ChatBox" onClick={toggleChat}>
                <CloseIcon sx={{color: 'red'}}/>
                </button>
            </div>
            </div>
    
    )
    }

export default ChatBox
