import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import usericon from "../assets/Netflixuser.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userdata = useSelector((Store) => Store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photourl } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photourl: photourl,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
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
