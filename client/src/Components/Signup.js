import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/register`, {
        name,
        email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/notes");
          toast.success(response.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setName("");
        setEmail("");
        setPassword("");
      });
  };
  return (
    <div className="formContainer">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          required
        />
        <button type="submit">Sign up</button>
        <p>or</p>
        <Link className="loginLink" to="/">
          <button type="button">Login</button>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
