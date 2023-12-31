"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function verifyUserEmailPage(){

  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
//   console.log(verified);

  const verifyEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Verify Email</h1>
      <h2>{token ? `Token: ${token}` : "Token doesn't exist"}</h2>

      {verified && (
        <div >
            <h3 className="bg-orange-600 py-2 px-4 rounded-md mb-4">Email Verified</h3>
          <Link className="py-2 px-4 bg-blue-600 rounded-md m-auto w-full" href={"/login"}>Login</Link>
        </div>
      )}

      {error && (
        <div className="text-2xl p-2 text-black bg-red-700">
            Error occured
        </div>
      )}
    </div>
  );
};
