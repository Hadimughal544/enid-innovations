"use client";

import Sidebar from "./Components/Sidebar";
import ProtectedRoute from "./Components/Protectedroute";
import { useState, useEffect } from "react";
import { FiLayers, FiMonitor, FiTrendingUp, FiPackage } from "react-icons/fi";

export default function AdminDashboard() {
  const [innovationProjects, setInnovationProjects] = useState([]);
  const [studioProjects, setStudioProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://enid.pk/api";

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);

      // Fetch Innovation Projects
      const innovationRes = await fetch(`${apiUrl}/projects`);
      const innovationData = await innovationRes.json();
      setInnovationProjects(innovationData);

      // Fetch Studio Projects
      const studioRes = await fetch(`${apiUrl}/studioprojects`);
      const studioData = await studioRes.json();
      setStudioProjects(studioData);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    {
      title: "Innovation Projects",
      value: innovationProjects.length,
      icon: FiLayers,
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
    },
    {
      title: "Studio Projects",
      value: studioProjects.length,
      icon: FiMonitor,
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-50",
      textColor: "text-gray-700",
    },
    {
      title: "Total Projects",
      value: innovationProjects.length + studioProjects.length,
      icon: FiPackage,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
  ];

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-4 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Dashboard Overview
            </h1>
            <p className="text-gray-600">
              Manage your innovation and studio projects
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {loading ? "..." : stat.value}
                      </p>
                    </div>
                    <div className={`p-4 rounded-lg ${stat.bgColor}`}>
                      <Icon className={`${stat.textColor}`} size={28} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Projects Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Innovation Projects */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <FiLayers className="text-teal-600" />
                  Innovation Projects
                </h2>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
                  {innovationProjects.length}
                </span>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {loading ? (
                  <div className="text-center py-8 text-gray-500">
                    Loading projects...
                  </div>
                ) : innovationProjects.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No innovation projects yet
                  </div>
                ) : (
                  innovationProjects.map((project) => (
                    <div
                      key={project.id}
                      className="p-4 bg-gradient-to-r from-teal-50 to-white rounded-lg border border-teal-100 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-start gap-4">
                        {project.image && (
                          <img
                            src={`${apiUrl}/uploads/${project.image}`}
                            alt={project.title || "Project"}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 truncate">
                            {project.title || "Untitled Project"}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                            {project.description || "No description"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Studio Projects */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <FiMonitor className="text-gray-700" />
                  Studio Projects
                </h2>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                  {studioProjects.length}
                </span>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {loading ? (
                  <div className="text-center py-8 text-gray-500">
                    Loading projects...
                  </div>
                ) : studioProjects.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No studio projects yet
                  </div>
                ) : (
                  studioProjects.map((project) => (
                    <div
                      key={project.id}
                      className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-start gap-4">
                        {project.headerImage && (
                          <img
                            src={`${apiUrl}/uploads/${project.headerImage}`}
                            alt={project.title || "Project"}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 truncate">
                            {project.title || "Untitled Project"}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                            {project.description || "No description"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
