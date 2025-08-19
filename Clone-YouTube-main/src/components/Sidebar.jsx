import React from "react";
import { Avatar, Stack } from "@mui/material";

import { categories } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../firebase";

const Categories = ({ selectedCategory, setSelectedCategory }) => {

  const user = useSelector(state => state.data.user.user);

  const dispatch = useDispatch();
  
  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  return (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "lightgrey",
          color: "#000",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "red" : "grey", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
    <hr style={{width: '13vw'}}/>
      <button style={{display: 'flex', 
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      border: '0',
                      backgroundColor: '#fff'
                      }}>
        <Avatar> {user.username ? user.username.charAt(0).toUpperCase() : "A"}</Avatar>
        <span>
        <button onClick={handelLogout} className="logout_button"
        style={{
          fontSize: '15px', 
          borderRadius: '10px',
          fontWeight: 'bold',
          color: 'red',
          backgroundColor: 'lightgrey',
          padding: '10px',
          border: '0',
          marginLeft: '10px'
        }}
        >Log out</button>
        </span>
      </button>
  </Stack>
);
      }
export default Categories;