"use client";

import Link from "next/link";
import "./login.css";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function Login() {

  const router = useRouter();

  const [user, setUser] = useState({
    email:'',
    password:'',
  })

  const [loading, setLoading] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const onLogin = async() =>{
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log('Login Successfully', response.data);
      toast.success("Login Success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login Failed", error.message);
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  }


  useEffect(()=>{
    if(user.email.length > 0 && user.password.length > 0){
      setDisabledBtn(false);
    }
    else{
      setDisabledBtn(true);
    }
  }, [user]);

  // console.log(user.password)
  return (
    <div id="main">
      <div id="login">
        <h1>{loading? "Processing":"Login"}</h1>
        <div className="loginForm">
        <div>
            <label htmlFor="username">Email:</label>
            <input type="text" placeholder="Enter your email.. " value={user.email} onChange={(e) => setUser({...user, email:e.target.value})}/>
          </div>
          <div>
            <label htmlFor="username">Password:</label>
            <input type="password" placeholder="Enter your password.. " value={user.password} onChange={(e) => setUser({...user, password:e.target.value})}/>
          </div>
          <button onClick={onLogin} style={{cursor:disabledBtn? "not-allowed":"pointer"}} disabled={disabledBtn}>{disabledBtn ? `You can't Login` : "Login"}</button>
          <Link href={'/signup'}>New User</Link>
        </div>
      </div>
    </div>
  );
}
