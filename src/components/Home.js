import React, {useEffect, useState} from 'react';
import '../styles/Home.css'
import MovieGrid from "./MovieGrid";
import {FaPlus} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);
    const handleChangeRoute = () => {
        navigate('/add');
        window.location.reload();
    };

    return (
        <div className="main">
            <div>
                <section>
                    <h2>Filmy</h2>
                    <MovieGrid />
                </section>
            </div>
            {isLoggedIn && (
                <div className="add-movie-button" onClick={handleChangeRoute}>
                    <FaPlus />
                </div>
            )}
        </div>
    );
};

export default Home;
