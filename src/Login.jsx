import React from "react";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./Firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // some fancy firebase login shitttt
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with eamil and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));

    // do some fancy firebase register shittt
  };
  return (
    <div className="login">
      <NavLink to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="picture"
        />
      </NavLink>
      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
