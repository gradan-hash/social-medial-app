import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { authRoute, usersRoute } from "../../api/api";
import "./register.css";

const Register = () => {
  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const email = useRef();
  const Navigate = useNavigate();
 

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("pasword does not match");
    } else {
      const user = {
        username: username.current.value,
        password: password.current.value,
        email: email.current.value,
      };
      try {
        await axios.post(`${authRoute}/register`, user);
        Navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginwrapper">
        <div className="loginleft">
          <h3 className="loginlogo">Corneliusocial</h3>
          <span className="logindescp">
            connect with friends and the world around you on Corneliusocial
          </span>
        </div>
        <div className="loginright">
          <form className="loginbox" onSubmit={handleClick}>
            <input
              className="logininput"
              placeholder="username"
              ref={username}
              required
            />
            <input
              className="logininput"
              placeholder="email"
              type="email"
              ref={email}
              required
            />
            <input
              className="logininput"
              placeholder="password"
              ref={password}
              type="password"
              minLength={6}
              required
            />
            <input
              className="logininput"
              placeholder="password again"
              ref={passwordAgain}
              type="password"
              minLength={6}
              required
            />
            <button className="loginbutton" type="submit">
              Sign Up
            </button>

            <button className="loginregisterbutton"> Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
