import React from "react";

export const Login = (props) => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form className="login-form" >
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
        <button type="submit">Log In</button>
      </form>
      <div>Don't have an account?
      <button className="link-btn" onClick={() => props.onFormSwitch("register")}>
        Register here
      </button>
      </div>
    </div>
  )
}