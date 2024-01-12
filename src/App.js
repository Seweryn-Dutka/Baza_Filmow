import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import {MoviesProvider} from "./components/MoviesContext";
import MovieDetails from "./components/MovieDetails";
import SearchResults from "./components/SearchResults";
import AddMovie from "./components/AddMovie";
import {isExpired} from "react-jwt";

import './App.css';

function App() {
  return (
    <MoviesProvider>
      <Router>
      <div className="App">
        <Header />
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/search/:query" element={<SearchResults />} />
              <Route path="/details/:title/:id" element={<MovieDetails />} />
              <Route path="/add" element={isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <AddMovie />} />
            </Routes>
          
        <Footer/>
      </div>
    </Router>
    </MoviesProvider>
    
  );
}

export default App;
