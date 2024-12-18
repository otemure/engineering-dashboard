"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Handle form submission logic (e.g., API call)
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-96"
        >
          {/* <Image src={logo} /> */}
          <h1 className="text-2xl font-bold text-center pt-5 text-black">
            Welcome to Aella Internal Engineering Dashboard
          </h1>
          <p className="text-center text-sm pt- font-light pt-2 text-gray-500">
            Enter your credentials to access your account
          </p>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2 pt-5"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <Link
            href="/dashboard"
            className="w-full block text-center bg-aellaBlue text-white p-3 rounded-md hover:bg-blue-600 transition"
          >
            Sign in
          </Link>
        </form>
      </div>
    </>
  );
}
