import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../API";
import "./signUp.css";

function Signup() {
  const [Email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate()
  const SignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/signup`, {
        name: name,
        email: Email,
        password: Password,
      });
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="loginForm" onSubmit={SignUpSubmit}>
      <div className="loginEmail">
        <input
          type="email"
          placeholder="Email"
          required
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="loginEmail">
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="loginPassword">
        <input
          type="password"
          placeholder="Password"
          required
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Link to="/login">Already Registered ?</Link>
      </div>
      <input type="submit" value="SignUp" className="loginBtn" />
    </form>
  );
}

export default Signup;
