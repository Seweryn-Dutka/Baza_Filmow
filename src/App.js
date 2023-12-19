import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Details from './components/Details';
import AddMovie from './components/AddMovie';
import Home from './components/Home';
import './App.css';

function App() {

  const movies = [
    { title: 'Film1', image: 'image2.jpg', description: 'This is a great movie about...', rating: 5 },
    { title: 'Film2', image: 'image2.jpg', description: 'This is a great movie about...', rating: 5 },
    { title: 'Film3', image: 'image2.jpg', description: 'This is a great movie about...', rating: 5 },
    { title: 'Film4', image: 'image2.jpg', description: 'This is a great movie about...', rating: 5 },
    { title: 'Film5', image: 'image2.jpg', description: 'This is a great movie about...', rating: 5 },
    { title: 'Film6', image: 'image2.jpg', description: 'This is a great movie about...', rating: 5 },
    { title: 'Film7', image: 'image2.jpg', description: 'This is a great movie about...', rating: 5 },
    { title: 'Film8', image: 'image2.jpg', description: 'This is a great movie about...', rating: 5 },

  ];

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo-search">
            <div className="logo">
              <Link to="/">
                <img src="logo.png" alt="" />
              </Link>
            </div>
            <div className="search-bar" alt="Logo">
              <input type="text" placeholder="Search" />
            </div>
            <div className="search-button">
              <button className="search-button">Search</button>
            </div>
          </div>
          <div id="SignUp_SignIn">
            <Link to="/signup">
              <button className="signup-button">Sign Up</button>
            </Link>
            <Link to="/signin">
              <button className="signin-button">Sign In</button>
            </Link>
          </div>
        </header>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home movies={movies} />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/addmovie" element={<AddMovie/>} />
            <Route path="/details/:title" element={<Details movies={movies}/>} />
          </Routes>
        </div>

        <footer className="footer">
          <div className="copyright">&copy; Baza Filmow - Seweryn Dutka</div>
        </footer>
      </div>
    </Router>
  );
};

export default App;