"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import "./signup.css";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function signUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  // console.log(user.username)
  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);

      console.log("Signup successfully", response.data);

      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [user]);

  return (
    <div id="main">
      <div id="signup">
        <h1>{loading ? "Processing" : "SignUp"}</h1>
        <div className="signupForm">
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Enter your username.. "
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="username">Email:</label>
            <input
              type="text"
              placeholder="Enter your email.. "
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="username">Password:</label>
            <input
              type="password"
              placeholder="Enter your password.. "
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button
            onClick={onSignup}
            style={{ cursor: disabledBtn ? "not-allowed" : "pointer" }}
            disabled={disabledBtn}
          >
            {disabledBtn ? `You can't signup` : "Sign Up"}
          </button>
          <Link href={"/login"}>Existing User</Link>
        </div>
      </div>
    </div>
  );
}
