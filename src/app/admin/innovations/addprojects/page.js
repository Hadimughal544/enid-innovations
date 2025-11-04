"use client";
import React, { useState } from "react";
import ProtectedRoute from "../../Components/Protectedroute";

export default function AdminPanel() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !description) {
      setMessage("Please fill out all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("description", description);
    formData.append("image", image);

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("http://localhost:4000/projects", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      console.log("Response:", data);

      setMessage("Project uploaded successfully!");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.error(error);
      setMessage("Error uploading project. Check the console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
         Upload Project
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter project description..."
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="border rounded-lg p-2 cursor-pointer"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all disabled:bg-gray-400"
          >
            {loading ? "Uploading..." : "Upload Project"}
          </button>
        </form>

        {message && (
          <p className="text-center text-sm text-gray-700 mt-4">{message}</p>
        )}
      </div>
    </div>
    </ProtectedRoute>
  );
}
