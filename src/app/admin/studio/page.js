"use client";
import Link from "next/link";
import Sidebar from "../Components/Sidebar";
import ProtectedRoute from "../Components/Protectedroute";
import { FiPlus, FiTrash2 } from "react-icons/fi";

export default function StudioPage() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-4 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Studio Projects
            </h1>
            <p className="text-gray-600">
              Manage your studio portfolio
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {/* Add Projects Card */}
            <Link
              href="/admin/studio/addprojects"
              className="group relative overflow-hidden bg-gradient-to-br from-gray-800 to-black rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative p-8 flex flex-col items-center justify-center h-64">
                <div className="bg-white bg-opacity-20 p-6 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FiPlus className="text-white" size={48} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Add Projects
                </h2>
                <p className="text-gray-300 text-center">
                  Create new studio projects
                </p>
              </div>
            </Link>

            {/* Delete Projects Card */}
            <Link
              href="/admin/studio/deleteprojects"
              className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-800"
            >
              <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative p-8 flex flex-col items-center justify-center h-64">
                <div className="bg-gray-100 p-6 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FiTrash2 className="text-gray-800" size={48} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Delete Projects
                </h2>
                <p className="text-gray-600 text-center">
                  Remove existing projects
                </p>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
