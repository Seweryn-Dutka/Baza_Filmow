import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignInUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    login: '',
    nazwa: '',
    email: '',
    haslo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dane rejestracji:', formData);
    // Dodaj logikę rejestracji tutaj

    // Po zarejestrowaniu przekieruj użytkownika do strony logowania
    // Zakładam, że ścieżka do strony logowania to '/login'. Możesz dostosować ją do swoich potrzeb.
    // Dodatkowo, możesz przekierować użytkownika na stronę logowania, jeśli rejestracja powiedzie się.
  };

  return (
    <div className="signinup-container">
    <form onSubmit={handleSubmit}>
      <label>
        <text>Login:</text>
        <br />
        <input type="text" name="login" value={formData.login} onChange={handleChange} required />
      </label>
      
      <label>
        <text>Nazwa:</text>
        <br />
        <input type="text" name="nazwa" value={formData.nazwa} onChange={handleChange} required />
      </label>
      <label>
        <text>Email:</text>
        <br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        <text>Hasło:</text>
        <br />
        <input type="password" name="haslo" value={formData.haslo} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Zarejestruj się</button>
      <p>Already have an account? <Link to="/signin">Sign In</Link></p>
    </form>
    </div>
  );
};

export default SignUp;
