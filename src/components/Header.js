import React from "react";
import logo from "../assets/logo.png";
import usericon from "../assets/Netflixuser.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const userdata = useSelector((Store) => Store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute  w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={logo} alt="logo" />
      {userdata && (
        <div className="flex p-2">
          <img className="w-10 h-10 " src={usericon} alt="user-icon" />
          <button
            className="font-bold text-white m-2 border border-black px-2 py-1 bg-slate-500"
            onClick={handleSignOut}
          >
            {userdata.displayName} Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
