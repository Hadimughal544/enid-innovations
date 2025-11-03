"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function HandleLogin(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const error = await res.json();
        alert(error.message || "Login failed");
        return;
      }

      const data = await res.json();
      localStorage.setItem("token", data.access_token);
      router.push("/admin");
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b6a6b] via-[#0f4c4c] to-black px-6">
      <div className="w-full max-w-md bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-8 relative overflow-hidden">
        {/* Decorative gradient ring */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Admin Login
        </h1>
        <p className="text-center text-gray-500 mb-8 text-sm">
          Access your dashboard securely
        </p>

        <form onSubmit={HandleLogin} className="space-y-5">
          {/* Email */}
          <div className=" mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0b6a6b] focus:border-[#0b6a6b] outline-none transition text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div className=" mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0b6a6b] focus:border-[#0b6a6b] outline-none transition text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-[#0b6a6b] hover:bg-[#0d8283] text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-200"
          >
            Log In
          </button>
        </form>

      </div>
    </div>
  );
}
