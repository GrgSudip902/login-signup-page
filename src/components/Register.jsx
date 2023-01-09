import React from "react";

export const Register = (props) => {
  return (
    <div className="form-container">
      <h2>Register</h2>
      <form className="register-form">
        <label htmlFor="name">Full Name</label>
        <input 
          name="name" 
          id="name" 
          placeholder="Enter your full name" 
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email id"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
        />
        <button type="submit">Sign Up</button>
      </form>
      <div>Already have an account?
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
       Login here
      </button>
      </div>
    </div>
  );
};
