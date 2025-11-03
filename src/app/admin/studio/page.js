"use client";

import ProtectedRoute from "@/app/innovations/Components/Protectedroute";
import Link from "next/link";

export default function StudioPage() {
  return (
    <ProtectedRoute>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-5xl font-bold mb-10 text-black">Studio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Add Projects */}
        <Link
          href="/admin/studio/addprojects"
          className="flex items-center justify-center h-48 rounded-xl bg-black text-white font-bold text-2xl shadow-lg transition-transform transform hover:scale-105"
        >
          Add Projects
        </Link>

        {/* Delete Projects */}
        <Link
          href="/admin/studio/deleteprojects"
          className="flex items-center justify-center h-48 rounded-xl bg-white text-black font-bold text-2xl shadow-lg border border-black transition-transform transform hover:scale-105"
        >
          Delete Projects
        </Link>
      </div>
    </div>
    </ProtectedRoute>
  );
}
