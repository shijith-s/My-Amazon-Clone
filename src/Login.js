import React, { useState } from "react";
import logo from "./images/amazon-logo-black_2.png";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signIn = (event) => {
    event.preventDefault();
    //login logics
    console.log("logging in");
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/"); //redirect to home page
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault();
    //registering logics
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/"); //redirect to home page
      })
      .catch((e) => alert(e.message));
    console.log("registeing");
  };
  return (
    <div className="login">
      <div className="login__page">
        <Link to="/">
          <img src={logo} alt="amazon logo" />
        </Link>
        <div>
          <form action="" className="login__userInfo">
            <h1>Sign-In</h1>
            <h3>Email or mobile phone number</h3>
            <input
              type="text"
              name="userinfo"
              onChange={(event) => setEmail(event.target.value)}
            />
            <h3>password</h3>
            <input
              type="password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <input type="submit" onClick={signIn} value="Sign-In" />
            <br />
            <div className="login__checkbox">
              <input type="checkbox" name="keepSigned" />
              <p>Keep me signed in</p>
            </div>
            <p>
              By continuing, you agree to Amazon's{" "}
              <a href="#">Conditions of Use</a> and{" "}
              <a href="#">Privacy Notice</a>.
            </p>
          </form>
        </div>
        <div className="login__createAccount">
          <p>New to Amazon?</p>
          <button onClick={register}>Create your Amazon account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
