import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../image/logo.png';
import '../styles/Header.css'

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearchButtonClick = () => {
    handleSearch();
  };

  const handleSearch = () => {
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <header className="App-header">
      <div className="logo-search">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div>
          <button className="search-button" onClick={handleSearchButtonClick}>
            <FaSearch />
          </button>

        </div>
      </div>


        <div id="SignUp_SignIn">
          {isLoggedIn ? (
            <button className="signin-button" onClick={handleLogout} >Log out</button>
          ) : (
            <>
              <Link to="/signup">
                <button className="signup-button">Sign Up</button>
              </Link>
                
              <Link to="/signin">
                <button className="signin-button">Sign In</button>
              </Link>
            </>
          )}
        </div>
      
    </header>
  );
};

export default Header;
