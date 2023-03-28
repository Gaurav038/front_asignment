import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../API";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${BASE_URL}/login`,
        {
          email: loginEmail,
          password: loginPassword,
        },
        { withCredentials: true, credentials: "include" }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="loginForm" onSubmit={loginSubmit}>
      <div className="loginEmail">
        <input
          type="email"
          placeholder="Email"
          required
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
      </div>
      <div className="loginPassword">
        <input
          type="password"
          placeholder="Password"
          required
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
      </div>
      <div>
        <Link to="/sign">Not Registered ?</Link>
      </div>
      <input type="submit" value="Login" className="loginBtn" />
    </form>
  );
}

export default Login;
