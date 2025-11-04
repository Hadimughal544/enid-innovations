"use client";

import Link from "next/link";
import ProtectedRoute from "../../Components/Protectedroute";

export default function Home() {
  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  }

  return (
    <ProtectedRoute>
      <div className="relative min-h-screen flex flex-col items-center gap-20 py-40 bg-gray-100 px-4">
        {/* Top right buttons */}
        <div className="absolute top-6 right-6 flex flex-col sm:flex-row gap-3">
          <Link href="/admin/addadmin">
            <button className="px-4 py-2 bg-black text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition text-sm sm:text-base">
              Add Admin
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-black text-white font-semibold rounded-lg shadow hover:bg-red-600 transition text-sm sm:text-base"
          >
            Log out
          </button>
        </div>

        {/* Page heading */}
        <h1 className="text-5xl font-extrabold text-gray-900">Admin Panel</h1>

        {/* Navigation grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Innovation Box */}
          <Link
            href="/admin/innovations"
            className="relative flex items-center justify-center h-60 rounded-xl bg-[#0b6a6b] text-white overflow-hidden group shadow-lg transition-transform transform hover:scale-105"
          >
            <span className="text-4xl font-bold z-10">Innovation</span>
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity"></div>
          </Link>

          {/* Studio Box */}
          <Link
            href="/admin/studio"
            className="relative flex items-center justify-center h-60 rounded-xl bg-black text-white overflow-hidden group shadow-lg transition-transform transform hover:scale-105"
          >
            <span className="text-4xl font-bold z-10">Studio</span>
            <div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity"></div>
          </Link>
        </div>
      </div>
    </ProtectedRoute>
  );
}
