"use client";

import React, { useState } from "react";


const login = () => {
    const[form, setForm] = useState({email: "", password: "" });
    const[message, setMessage] = useState("");

    const hanndleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const respose = await fetch("/api/Sign", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await respose.json();
        console.log("response", data);

        setMessage(data.message);
    }



    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <form onSubmit={hanndleSubmit} className="space-y-2">
                <div className="w-full max-w-sm p-6 bg-blue-50 shadow rounded">
                    <h1 className="text-xl font-bold text-center mb-4 text-black">Login</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setForm({ ...form, email:e.target.value })}
                        className="flex w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setForm({ ...form, email:e.target.value })}
                        className="flex w-full p-2 border rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full p-2 bg-blue-500 text-white rounded"
                    >Login
                    </button>
                    {message && <p className="mt-3 text-red-500">{message}</p>}

                </div>
            </form>
        </div >
    )
}

export default login;