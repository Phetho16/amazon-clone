import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {auth} from '../Layout/firebase'
import "./login.css";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory()
  
 

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(auth=>{history.push('/')}).catch(error => alert(error.message))

  };
const register = e => {
e.preventDefault();
auth.createUserWithEmailAndPassword(email, password).then(
(auth) => {
if(auth) {
history.push('/');
}
}).catch(error => alert(error.message))
};


  return (
    <div className="login">
      <Link to="/home">
        <img
          src="data:image/png;base64,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"
          alt="Amazon logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button className="login_registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
