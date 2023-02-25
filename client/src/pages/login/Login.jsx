import React, { useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
const Login = () => {
  //useref to pevent re-rendering
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  // console.log(user);
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
              placeholder="email"
              type="email"
              ref={email}
              required
            />
            <input
              className="logininput"
              placeholder="password"
              type="password"
              minLength={6}
              ref={password}
              required
            />
            <button className="loginbutton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress
                  style={{ color: "white", fontsize: "20px" }}
                />
              ) : (
                "Log in"
              )}
            </button>
            <span className="loginforgot">Forgot Password</span>
            <Link to="/register">
              <button className="loginregisterbutton">
                {isFetching ? (
                  <CircularProgress
                    style={{ color: "white", fontsize: "20px" }}
                  />
                ) : (
                  "   Create a new account"
                )}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
