import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import usericon from "../assets/Netflixuser.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleSearchView } from "../utils/gptSlice";
import { SUPPOERTED_LANGUAGES } from "../utils/Constants";
import { changeLanguage } from "../utils/ConfigSlice";
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleGpt = () => {
    dispatch(toggleSearchView());
  };
  const handlelangchange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row  justify-between">
      <img className="w-44 mx-auto md:mx-0" src={logo} alt="logo" />
      {userdata && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="m-2  bg-white text-black rounded-lg"
              onChange={handlelangchange}
            >
              {SUPPOERTED_LANGUAGES.map((lang) => (
                <option key={lang.identifiers} value={lang.identifiers}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-2 md:mx-4 my-2 bg-white text-black rounded-lg"
            onClick={handleGpt}
          >
            {showGptSearch ? "Homepage" : "Gpt Search"}
          </button>
          <img
            className="md:w-12 h-12  cursor-pointer"
            src={usericon}
            alt="user-icon"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute bg-[#333333] text-slate-400 mt-14 w-48 right-2 p-2 rounded-lg shadow-lg">
              <ul>
                <div className="">Welcome {userdata.displayName}</div>
                <button onClick={handleSignOut}>Sign out</button>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
