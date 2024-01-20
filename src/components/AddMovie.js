import React, { useState } from 'react';
import '../styles/AddMovie.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddMovie = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        content: '',
        rate: '',
        productionYear: '',
        genre: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleChangeRoute = () => {
        navigate('/');
        window.location.reload();
    };

    const handleAdd = async (event) => {
        event.preventDefault();

        if (!formData.title || !formData.image || !formData.content || !formData.rate || !formData.productionYear || !formData.genre) {
            return;
        }

        axios
            .post('https://at.usermd.net/api/movies', {
                title: formData.title,
                image: formData.image,
                content: formData.content,
                rate: formData.rate,
                productionYear: formData.productionYear,
                genre: formData.genre               
            })
            .then((response) => {
                handleChangeRoute();
            })
            .catch((error) => {
                console.log(error);

                setFormData({
                    title: '',
                    image: '',
                    content: '',
                    rate: '',
                    productionYear: '',
                    genre: '',
                });
            });
    };

    return (
        <div className="main-box add-movie-box">
            <div className="add-movie-container">
                <h2>Dodaj film</h2>
                <form className="form-add-movie">
                    <div className="form-global form-left-column">
                        <p>Szczegółowe informacje</p>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Tytuł"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            id="image"
                            name="image"
                            placeholder="Okładka (link)"
                            value={formData.image}
                            onChange={handleInputChange}
                        />
                        <textarea
                            id="content"
                            name="content"
                            placeholder="Opis"
                            rows="10"
                            value={formData.content}
                            onChange={handleInputChange}
                        />
                        <select
                            id="rate"
                            name="rate"
                            value={formData.rate}
                            onChange={handleInputChange}
                        >
                            {[...Array(10).keys()].map((num) => (
                                <option key={num + 1} value={num + 1}>
                                    {num + 1}
                                </option>
                            ))}
                        </select>
                        <select
                            id="productionYear"
                            name="productionYear"
                            value={formData.productionYear}
                            onChange={handleInputChange}
                        >
                            {[...Array(new Date().getFullYear() - 1899).keys()].map((num) => (
                                <option key={1900 + num} value={1900 + num}>
                                    {1900 + num}
                                </option>
                            ))}
                        </select>

                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            placeholder="Gatunek"
                            value={formData.genre}
                            onChange={handleInputChange}
                        />

                        <button className='add-movie-push-button' type="submit" onClick={handleAdd}>
                            Dodaj film
                        </button>
                    </div>
                </form>
                <Link to="/delete" className="delete-movie-push-button">Usuń film</Link>
            </div>
        </div>
    );
};

export default AddMovie;
