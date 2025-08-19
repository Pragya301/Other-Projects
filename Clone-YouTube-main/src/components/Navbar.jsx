import { useState } from 'react';
import { Avatar, Stack } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import { SearchBar } from './'
import { useSelector } from 'react-redux';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ChatBox from './ChatBox';


const Navbar = () => {

  // const [isChatOpen, setChatOpen] = useState(false);
  const user = useSelector(state => state.data.user.user);
    

  // const toggleChat = () => {
  //   setChatOpen(!isChatOpen);
  // };

  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={1} sx={{position: 'sticky', background: 'white', top: 0, justifyContent: 'space-between' }}
    >
      <div style={{display: 'flex', flexDirection: 'row'}}><MenuOutlinedIcon  sx={{ p: '10px', color: 'grey' }}/>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={20} />
    </Link></div>
    
    <SearchBar />
    <div style={{display: 'flex', flexDirection: 'row'}}>

    {/* Chat Button */}
    {/* <> <button onClick={toggleChat} style={{ padding: '6px 10px 5px 10px', color: 'grey', marginRight: '10px', cursor: 'pointer', border: 'none',  backgroundColor: '#e5e5e5', borderRadius: '50%'}}>
      <ChatOutlinedIcon />
    </button>
    {isChatOpen && <ChatBox toggleChat={toggleChat}/>}
    </>
    */}
  
    <VideoCallOutlinedIcon  sx={{ p: '10px', mx: '10px', color: 'grey', backgroundColor: '#e5e5e5',borderRadius: '50%' }}/>
    <NotificationsNoneIcon  sx={{ p: '10px',  mx: '10px', color: 'grey', backgroundColor: '#e5e5e5',borderRadius: '50%'  }}/>
    <Avatar  sx={{ p: '2px', mx: '10px', color: 'black', backgroundColor: '#e5e5e5' }}> {user.username ? user.username.charAt(0).toUpperCase() : "A"}</Avatar>
    </div>

    </Stack>
  )
}

export default Navbar
