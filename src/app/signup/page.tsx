'use client';

import Link from "next/link";
import "./signup.css";
import React from "react";

export default function signUp() {

  const [user, setUser] = React.useState({
    email: '',
    password: '',
    username: '',
  })

  // console.log(user.username)
  const onSignup = async() =>{
    console.log('Submitted')
  }
  return (
    <div id="main">
      <div id="signup">
        <h1>Sign Up </h1>
        <div className="signupForm">
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="Enter your username.. " value={user.username} onChange={(e) => setUser({...user, username:e.target.value})}/>
          </div>
          <div>
            <label htmlFor="username">Email:</label>
            <input type="text" placeholder="Enter your email.. " value={user.email} onChange={(e) => setUser({...user, email:e.target.value})}/>
          </div>
          <div>
            <label htmlFor="username">Password:</label>
            <input type="password" placeholder="Enter your password.. " value={user.password} onChange={(e) => setUser({...user, password:e.target.value})}/>
          </div>
          <button onClick={onSignup}>SignUp</button>
          <Link href={'/login'}>Existing User</Link>
        </div>
      </div>
    </div>
  );
}
