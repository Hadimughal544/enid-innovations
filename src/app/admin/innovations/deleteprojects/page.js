"use client";
import ProtectedRoute from "../../Components/Protectedroute";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  // Fetch all projects
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://enid.pk/api/projects");
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  // Delete a project
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`https://enid.pk/api/projects/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setProjects((prev) => prev.filter((p) => p.id !== id));
      } else {
        console.error("Failed to delete project");
      }
    } catch (err) {
      console.error("Error deleting project:", err);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <ProtectedRoute>
      <section className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-6">
          <h1 className="text-3xl font-semibold mb-6 text-gray-800">
            Delete Projects
          </h1>

          {loading ? (
            <p className="text-gray-500">Loading projects...</p>
          ) : projects.length === 0 ? (
            <p className="text-gray-500">No projects available.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between border rounded-lg p-3 bg-gray-50 hover:bg-gray-100 transition"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={`https://enid.pk/api/uploads/${project.image}`}
                      alt={project.description || "Project image"}
                      width={160}
                      height={80}
                      className="rounded-lg object-cover border"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-gray-900 font-semibold">
                        {project.title || "No title"}
                      </h3>
                      <p className="text-gray-700 text-sm max-w-md truncate">
                        {project.description || "No description available"}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(project.id)}
                    disabled={deletingId === project.id}
                    className={`px-4 py-2 rounded-md text-white transition ${deletingId === project.id
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700"
                      }`}
                  >
                    {deletingId === project.id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </ProtectedRoute>
  );
}
