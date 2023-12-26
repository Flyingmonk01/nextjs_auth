"use client";

import Link from "next/link";
import "./login.css";
import React from "react";

export default function signUp() {
  const [user, setUser] = React.useState({
    email:'',
    password:'',
  })

  const onLogin = async() =>{
    console.log("Login")
  }

  // console.log(user.password)
  return (
    <div id="main">
      <div id="login">
        <h1>Login </h1>
        <div className="loginForm">
        <div>
            <label htmlFor="username">Email:</label>
            <input type="text" placeholder="Enter your email.. " value={user.email} onChange={(e) => setUser({...user, email:e.target.value})}/>
          </div>
          <div>
            <label htmlFor="username">Password:</label>
            <input type="password" placeholder="Enter your password.. " value={user.password} onChange={(e) => setUser({...user, password:e.target.value})}/>
          </div>
          <button onClick={onLogin}>Login</button>
          <Link href={'/signup'}>New User</Link>
        </div>
      </div>
    </div>
  );
}
