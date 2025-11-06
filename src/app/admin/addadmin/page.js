"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function HandleRegister(e) {
    e.preventDefault();

    try {
      const res = await fetch("https://enid.pk/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const error = await res.json();
        alert(error.message || "Registration failed");
        return;
      }

      alert("Admin registered successfully!");
      router.push("/admin/login");
    } catch (err) {
      console.error("Register error:", err);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b6a6b] via-[#0f4c4c] to-black px-6">
      <div className="relative w-full max-w-md bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-8 overflow-hidden">
        {/* Decorative Blurs */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Register Admin
        </h1>
        <p className="text-center text-gray-500 mb-8 text-sm">
          Create a new admin account for your dashboard
        </p>

        <form onSubmit={HandleRegister} className="space-y-5">
          {/* Email Input */}
          <div className=" mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0b6a6b] focus:border-[#0b6a6b] outline-none transition text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Password Input */}
          <div className=" mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0b6a6b] focus:border-[#0b6a6b] outline-none transition text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0b6a6b] hover:bg-[#0d8283] text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-200"
          >
            Register
          </button>
        </form>

      </div>
    </div>
  );
}
