"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/admin/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Checking auth...</div>;
  }

  return <>{children}</>;
}
