import React, {useEffect, useState} from 'react';
import '../styles/AddMovie.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeleteMovie = () => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [formData, setFormData] = useState({
        selectedMovieId: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://at.usermd.net/api/movies');
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeRoute = () => {
        navigate('/');
        window.location.reload();
    };

    const handleDelete = async (event) => {
        event.preventDefault();

        if (!formData.selectedMovieId) {
            return;
        }

        try {
            const token = localStorage.getItem('token');

            const headers = {
                Authorization: `Bearer ${token}`
            };

            const response = await axios.delete(`https://at.usermd.net/api/movie/${formData.selectedMovieId}`, { headers });

            if (!response.data) {
                throw new Error('Network response was not ok');
            }

            handleChangeRoute();
        } catch (error) {
            console.error('Error deleting movie:', error);
        }
    };

    return (
        <div className="main-box add-movie-box">
            <div className="add-movie-container">
                <h2>Usuń film</h2>
                <form className="form-add-movie">
                    <div className="form-global form-left-column">
                        <p>Szczegółowe informacje</p>
                        <select
                            id="selectedMovieId"
                            name="selectedMovieId"
                            value={formData.selectedMovieId}
                            onChange={handleInputChange}
                        >
                            <option value="">Wybierz film do usunięcia</option>
                            {movies.map((movie) => (
                                <option key={movie.id} value={movie.id}>
                                    {movie.title}
                                </option>
                            ))}
                        </select>
                        <button className='delete-movie-push-button' type="submit" onClick={handleDelete}>
                            Usuń film
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeleteMovie;