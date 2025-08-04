import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, AuthProvider } from '../config/firebase';
import './App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
    } catch (err) {
      console.error(err);
    }
  };

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, AuthProvider);
      console.log(result?.user?.displayName);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <h2>🔐 Sign In</h2>
      <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
      <button className="btn primary" onClick={signup}>Sign In with Email</button>
      <button className="btn secondary" onClick={signIn}>Sign In with Google</button>
      <button className="btn logout" onClick={logout}>Log Out</button>
    </div>
  );
};

export default Login;