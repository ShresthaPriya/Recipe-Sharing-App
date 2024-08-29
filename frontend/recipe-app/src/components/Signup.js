import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/Signup.css';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { AppContext } from "../App";

const Signup = () => {
  const { username, setUsername } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState(""); // User role state
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      let route;

      // Determine the route based on user role
      if (userRole === "food enthusiast") {
        route = "http://localhost:4000/Signup"; // Food Enthusiast route
      } else if (userRole === "cook") {
        route = "http://localhost:4000/CookSignup"; // Cook route
      }  else if (userRole === "admin") {
        route = "http://localhost:4000/AdminLogin"; // Cook route
      } else {
        alert("Invalid role selected");
        setLoading(false);
        return;
      }

      const response = await axios.post(route, {
        username,
        email,
        password,
        role: userRole, // Send the role to backend
      });

      setLoading(false);

      const data = response.data;
      if (data.success) {
        setUsername(username); // Set the username in the context
        alert("Signup successful!");

        // Redirect based on user role
        switch (userRole) {
          case "cook":
            navigate("/CookLogin");
            break;
          case "food enthusiast":
            navigate("/Login");
            break;
            case "admin":
            navigate("/AdminLogin");
            break;
          default:
            navigate("/Login");
            break;
        }
      } else {
        alert("Signup failed: " + data.error);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error during Signup:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const responseMessage = (response) => {
    console.log(response);
  };

  const errorMessage = (error) => {
    console.error(error);
  };

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div className="Signup-page">
      <div className="Signup-container">
        <div className="Signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label>User Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
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
            <div className="users-dropdown">
              <label>Select User Role</label>
              <select 
                value={userRole} 
                onChange={(e) => setUserRole(e.target.value)} 
                required
              >
                <option value="">Select</option>
                <option value="food enthusiast">Food Enthusiast</option>
                <option value="cook">Cook</option>
                <option value="Meal Planner">Meal Planner</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="policy-checkbox">
              <label>
                <input type="checkbox" required /> 
              </label>
              <p>I agree with all the terms and conditions.</p>
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <div className="Signup-footer">
            <p>
              Already have an account? <Link to="/Login">Log in</Link>
            </p>
            <span>or</span>
          </div>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
        <div className="Signup-image">
          <h1>Bon Appétit</h1>
          <img src={require('../images/splash.jpg')} alt="Food" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
