"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProtectedRoute from "../../Components/Protectedroute";

export default function StudioProjectsUpload() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [headerImage, setHeaderImage] = useState(null);
  const [detailImages, setDetailImages] = useState([]);
  const [previewHeader, setPreviewHeader] = useState(null);
  const [previewDetails, setPreviewDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🟢 Handle text input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🟢 Handle header image upload
  const handleHeaderChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setHeaderImage(file);
    setPreviewHeader(URL.createObjectURL(file));
  };

  // 🟢 Handle multiple detail images
  const handleDetailsChange = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setDetailImages((prev) => [...prev, ...files]); // ✅ allow multiple uploads over time
    setPreviewDetails((prev) => [
      ...prev,
      ...files.map((f) => URL.createObjectURL(f)),
    ]);
  };

  // 🟢 Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (formData.title.length > 100) {
      alert("Title must be less than 100 characters.");
      return;
    }
    if (formData.description.length > 3000) {
      alert("Description must be less than 3000 characters.");
      return;
    }
    if (headerImage && headerImage.size > 10 * 1024 * 1024) {
      alert("Header image size must be less than 10MB.");
      return;
    }
    for (const img of detailImages) {
      if (img.size > 10 * 1024 * 1024) {
        alert(`Detail image ${img.name} size must be less than 10MB.`);
        return;
      }
    }

    setLoading(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    if (headerImage) data.append("headerImage", headerImage);
    detailImages.forEach((img) => data.append("detailImages", img));

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://enid.pk/api";
      const res = await fetch(`${apiUrl}/studioprojects`, {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        alert("Project uploaded successfully!");
        setFormData({ title: "", description: "" });
        setHeaderImage(null);
        setDetailImages([]);
        setPreviewHeader(null);
        setPreviewDetails([]);
      } else {
        const errorData = await res.json();
        alert(`Upload failed: ${errorData.message || "Unknown error"}`);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during upload.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <section className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Upload Studio Project
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
              ></textarea>
            </div>

            {/* Header Image */}
            <div>
              <label className="block text-gray-700 mb-2">Header Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleHeaderChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
              {previewHeader && (
                <div className="mt-3 w-full h-48 relative rounded-lg overflow-hidden">
                  <Image
                    src={previewHeader}
                    alt="Header preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
            </div>

            {/* Detail Images */}
            <div>
              <label className="block text-gray-700 mb-2">
                Detail Images (you can select multiple)
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleDetailsChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
              {previewDetails.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {previewDetails.map((src, i) => (
                    <div
                      key={i}
                      className="relative h-32 w-full rounded-lg overflow-hidden"
                    >
                      <Image
                        src={src}
                        alt={`Detail ${i + 1}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? "Uploading..." : "Upload Project"}
            </button>
          </form>
        </div>
      </section>
    </ProtectedRoute>
  );
}
