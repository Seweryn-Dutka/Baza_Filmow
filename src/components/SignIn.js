import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SignInUp.css';
import axios from "axios";

const SignIn = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    login: '',
    haslo: '',
  });

  const handleInputChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
};

const [errors, setErrors] = useState({});
const handleChangeRoute = () => {
    navigate('/');
    window.location.reload();
};

const handleLogin = async (event) => {
    event.preventDefault();

    if (!formData.login || !formData.password) {
        return;
    }

    axios
        .post('https://at.usermd.net/api/user/auth', {
            login: formData.login,
            password: formData.password
        })
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            handleChangeRoute();
        })
        .catch((error) => {
            const errorMessages = {};
            errorMessages.password =
                "Given username doesn't exist or the password is wrong!";
            setErrors(errorMessages || {});
            console.log(error);

            setFormData({
                login: '',
                password: '',
            });
        });
};

return (
  <div className="main-box">
      <div className="signinup-container">
          <h2>Zaloguj się</h2>
          <form className="form-global">
              <input type="text" id="login" name="login" placeholder="Login" value={formData.email} onChange={handleInputChange}/>
              <input type="password" id="password" name="password" placeholder="Hasło" value={formData.email} onChange={handleInputChange}/>
              <button className='Login_btn' type="submit" onClick={handleLogin} >Zaloguj się</button>
          </form>
          <p>Nie masz jeszcze konta? <Link to="/signup" className="login-link-text-gray">Zarejestruj się</Link></p>
      </div>
  </div>
);
};

export default SignIn;