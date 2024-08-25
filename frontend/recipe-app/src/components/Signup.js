import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/Signup.css';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:4000/Signup", {
        username,
        email,
        password,
      });
      setLoading(false);
  
      const data = response.data;
      if (data.success) {
        setUsername(username); // Set the username in the context
        alert("Signup successful!");
        navigate("/Login"); // Redirect to profile page after signup
      } else {
        alert("Signup failed: " + data.error);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error during Signup:", error);
      alert("An error occurred. Please try again.");
    }
  };
  

  // Function to handle Google login success
  const responseMessage = (response) => {
    console.log(response); // Handle the Google login response
  };

  // Function to handle Google login error
  const errorMessage = (error) => {
    console.error(error); // Handle the Google login error
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
          <h2>Sign Up</h2> {/* Corrected the form title */}
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
            <div className="policy-checkbox">
              <label>
                <input type="checkbox" required /> 
              </label><p>I agree with all the terms and conditions.</p>
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <div className="Signup-footer">
            
            <p>
              Already have an account? <Link to="/Login">Log in</Link>
            </p>
            <span>or</span>
          </div>
          {/* <AuthProvider projectId="P2kzltwN5diBRr15Vd5ct6ssLsY6">
	<Descope
		flowId="sign-up-or-in"
		theme="light"
		onSuccess={(e) => {
			console.log(e.detail.user.name)
			console.log(e.detail.user.email)
		}}
		onError={(err) => {
			console.log("Error!", err)
		}}
	/>
</AuthProvider> */}
          
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
