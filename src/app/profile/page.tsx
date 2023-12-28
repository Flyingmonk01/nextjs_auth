"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage(){
    const router = useRouter();
    // const [data, setData] = useState("");
    const logout = async() =>{
        try {
            await axios.get('/api/users/logout')
            toast.success("Logout Successful");
            router.push('/login');
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
    }
    

    const getUserDetails = async() => {
        const res = await axios.get('/api/users/me');
        console.log("Response: ", res.data);
        // setData(res.data.data);
        router.push(`/profile/${res.data.data._id}`)
    }
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-4xl">Profile</h1>
            <hr />
            <p>Profile Page</p>
            <hr />
            <button
            onClick={logout}
            className="bg-blue-600 py-2 px-4 rounded-lg mt-4 hover:bg-blue-400">Log out</button>
            <hr />
            <button
            onClick={getUserDetails}
            className="bg-red-400 py-2 px-4 rounded-lg mt-4 hover:bg-blue-400">Get User Details</button>
        </div>
    )
}