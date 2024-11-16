import React, { useState } from 'react';
import '../css/signup.css'; // Make sure to include the corresponding CSS file


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., validate, submit to API)
    console.log(formData);
  };
  
  
    // Toggle the dark mode state
  

  return (
    
    <div className="container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className='singup1'>Sign Up</h2>

        <div className="input-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username_1"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="social-login">
          <div>
          <p>Or Login with</p>
          </div>
          <div className="social-buttons">
            <button className="google-btn">
            
              Continue with Google
            </button>
            <button type="button" className="github-btn">
            Continue with GitHub
            </button>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>

        <p className="login-link">
          Already have an account? <a href="#">Log in</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
