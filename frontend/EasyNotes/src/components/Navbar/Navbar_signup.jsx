import React, { useState } from 'react'
import Profile_signup from '../Cards/Profile_signup';
import { useNavigate } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";

const Navbar_singup = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/Login");
  };

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 className="text-xl font-medium text-black py-2">EasyNotes</h2>

        <SearchBar 
          value = {searchQuery}
          onChange = {({target}) => {
            setSearchQuery(target.value);
          }}
          handleSearch = {handleSearch}
          onClearSearch = {onClearSearch}
        />

        <Profile_signup onLogout={onLogout} />
    </div>
  );
}; 

export default Navbar_singup
