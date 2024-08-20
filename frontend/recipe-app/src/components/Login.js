import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/Login.css';

const credentials = [
  { email: "test123", password: "test123" },
  { email: "test@124", password: "test124" },
  { email: "test@125", password: "test" }
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let i = 0; i < credentials.length; i++) {
      if (credentials[i].email === email && credentials[i].password === password) {
        setIsAuthenticated(true);
        break;
      }
    }

    if (isAuthenticated) {
      navigate("/Home");
    } else {
      alert("Invalid username or password");
    }
  };

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
                <input type="checkbox" /> Remember Me
              </label>
              <Link to="/forgot">Forgot password?</Link>
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
