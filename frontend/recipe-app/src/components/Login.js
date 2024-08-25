import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/Login.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await axios.get("http://localhost:4000/signup", {
        email,
        password,
      });
      setLoading(false);

      const data = response.data;
      if (data.success) {
        alert("Login successful!");
        navigate("/Home");
      } else {
        alert("Login failed: " + data.error);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h2>Log in</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              required
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <div className="remember-forgot">
              <label>
                <input type="checkbox"/>  <span>Remember Me</span>
              </label>
              <Link to="/forgotPassword">Forgot password?</Link>
            </div>
            <button type="submit">Log in</button>
          </form>
          <div className="login-footer">
            <span>or</span>
            <p>
              Do not have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
        <div className="login-image">
          <h1>Bon Appétit</h1>
          <img src={require('../images/splash.jpg')} alt="Food" />
        </div>
      </div>
    </div>
  );
};

export default Login;
