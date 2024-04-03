import React from "react";
import { USER_AVATAR } from "../utils/constants";
import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  useSelector,useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
const Header = () => {
  const dispatch=useDispatch()
  const PHOTO_URL=useSelector((state)=>state?.user?.photoURL)  // subscribe to redux store
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      dispatch(removeUser())
       window.location.href = '/';
      }).catch((error) => {
        // window.location.href = '/error-page';
      });
    
  }
  return (
    <div className="absolute py-2 w-screen px-8 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
      className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex gap-1 p-4">
        <img alt="usericon" src={PHOTO_URL?PHOTO_URL:USER_AVATAR } className="w-12 h-12"/>
        <button onClick={handleSignOut}>(Sign Out)</button>
      </div>
    </div>
  );
};

export default Header;
