"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../context/AuthContext";
import Footer from "./Footer";

const Navbar = () => {
    const { user, logout } = useAuth();
    const [expanded, setExpanded] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <div className="bg-white border-b">
            <header className="relative z-10 py-2">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <img src="/images/agro-ai-logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden">
                            <button type="button" onClick={() => setExpanded(!expanded)}>
                                {expanded ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex md:items-center md:space-x-6">
                            <Link href="/" className={`${currentPath === "/" ? "text-green-500" : "text-gray-900 hover:text-green-500"}`}>Home</Link>
                            <Link href="/our-solutions" className={`${currentPath === "/our-solutions" ? "text-green-500" : "text-gray-900 hover:text-green-500"}`}>Our Solutions</Link>
                            <Link href="/our-production" className={`${currentPath === "/our-production" ? "text-green-500" : "text-gray-900 hover:text-green-500"}`}>Our Production</Link>
                            <Link href="/contacts" className={`${currentPath === "/contacts" ? "text-green-500" : "text-gray-900 hover:text-green-500"}`}>Contact Us</Link>
                        </div>

                        {/* Alerts & User Profile */}
                        {user && (
                            <div className="hidden md:flex items-center space-x-4 relative">
                                {/* Alerts Icon */}
                                <Link href="/alerts">
                                    <img src="/images/bell-icon.png" alt="Alerts" className="w-12 h-12 cursor-pointer" />
                                </Link>

                                {/* User Profile Dropdown */}
                                <button onClick={() => setShowDropdown((prev) => !prev)}>
                                    <img src="/images/user-01.png" alt="User Avatar" className="w-10 h-10 rounded-full" />
                                </button>

                                {showDropdown && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                                        <div className="px-4 py-3 bg-gray-50">
                                            <p className="text-sm text-gray-500">{user.email.split("@")[0]}</p>
                                        </div>
                                        <hr />
                                        <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-100">Logout</button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
