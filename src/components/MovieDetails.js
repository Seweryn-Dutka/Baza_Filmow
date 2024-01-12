import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovies } from "./MoviesContext";
import { FaPlayCircle } from 'react-icons/fa';
import axios from 'axios';
import '../styles/Details.css';

const MovieDetails = () => {
    const { id } = useParams();
    const { setMovies } = useMovies();
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`https://at.usermd.net/api/movies/${id}`);
                if (!response.data) {
                    throw new Error('Network response was not ok');
                }

                const movieDetailsData = response.data;
                setMovieDetails(movieDetailsData);
            } catch (error) {
                setError(error.message || 'Error fetching movie details');
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) {
        // Render loading spinner or another loading UI
        return <p>Loading...</p>;
    }

    if (error) {
        // Render an error message
        return <p>Error: {error}</p>;
    }

    return (
        <div className="movie-box">
            <div className="movie-box-first-column">
                <img src={movieDetails.image} alt={movieDetails.title} />
                <button onClick={() => {/* Add your play functionality here */}}>
                    <FaPlayCircle />
                </button>
            </div>
            <div className="movie-box-second-column">
                <h2>{movieDetails.title}</h2>
                <p>{movieDetails.content}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Aktorzy:</td>
                            <td>{movieDetails.mainActors}</td>
                        </tr>
                        <tr>
                            <td>Producent</td>
                            <td>{movieDetails.producer}</td>
                        </tr>
                        <tr>
                            <td>Gatunek</td>
                            <td>{movieDetails.genre}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MovieDetails;
