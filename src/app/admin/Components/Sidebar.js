"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
    FiHome,
    FiLayers,
    FiMonitor,
    FiLogOut,
    FiMenu,
    FiX,
    FiUserPlus
} from "react-icons/fi";

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/admin/login";
    };

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: FiHome },
        { name: "Innovation", href: "/admin/innovations", icon: FiLayers },
        { name: "Studio", href: "/admin/studio", icon: FiMonitor },
        { name: "Add Admin", href: "/admin/addadmin", icon: FiUserPlus },
    ];

    const isActive = (href) => {
        if (href === "/admin") {
            return pathname === href;
        }
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed top-0 left-0 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white
          w-64 transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          shadow-2xl
        `}
            >
                <div className="flex flex-col h-full">
                    {/* Logo/Header */}
                    <div className="p-6 border-b border-gray-700">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Admin Panel
                        </h1>
                        <p className="text-sm text-gray-400 mt-1">ENID Management</p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const active = isActive(item.href);

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                    ${active
                                            ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg transform scale-105"
                                            : "hover:bg-gray-700 hover:translate-x-1"
                                        }
                  `}
                                >
                                    <Icon size={20} />
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Logout Button */}
                    <div className="p-4 border-t border-gray-700">
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition-all duration-200 hover:shadow-lg"
                        >
                            <FiLogOut size={20} />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
