import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignInUp.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    login: '',
    haslo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dane logowania:', formData);
    // Dodaj logikę logowania tutaj
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
          <text>Hasło:</text>
          <br />
          <input type="password" name="haslo" value={formData.haslo} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Zaloguj się</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default SignIn;