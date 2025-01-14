'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Next.js Link for navigation
import { usePathname } from "next/navigation"; // For route path
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../context/AuthContext"; // Ensure AuthContext is configured properly

const Navbar = () => {
    const { user, logout } = useAuth(); // Get user and logout function from AuthContext
    const [expanded, setExpanded] = useState(false); // Mobile menu toggle
    const [showDropdown, setShowDropdown] = useState(false); // User dropdown toggle
    const pathname = usePathname(); // Get current path

    // Helper function to check if a route is active
    const isActive = (path: string) => pathname === path;

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (!event.target || !(event.target as HTMLElement).closest("#user-dropdown")) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    return (
        <div className="bg-white border-b">
            <header className="relative z-10 py-4 md:py-4">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link
                                href="/"
                                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                            >
                                <img
                                    className="w-auto h-8"
                                    src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg"
                                    alt="Logo"
                                />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden">
                            <button
                                type="button"
                                className="text-gray-900"
                                onClick={() => setExpanded(!expanded)} // Toggle menu
                                aria-expanded={expanded}
                            >
                                {expanded ? (
                                    <XMarkIcon className="w-7 h-7" />
                                ) : (
                                    <Bars3Icon className="w-7 h-7" />
                                )}
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex md:items-center md:justify-center md:space-x-10 md:absolute md:inset-y-0 md:left-1/2 md:translate-x-1/2 lg:space-x-8 md:mt-8">
                            <Link
                                href="/"
                                className={`text-lg font-medium transition-all duration-200 pb-6 ${isActive("/")
                                    ? "text-green-500 border-b-4 border-green-500"
                                    : "text-gray-900 hover:text-green-500"
                                    }`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/our-solutions"
                                className={`text-lg font-medium transition-all duration-200 pb-6 ${isActive("/our-solutions")
                                    ? "text-green-500 border-b-4 border-green-500"
                                    : "text-gray-900 hover:text-green-500"
                                    }`}
                            >
                                Our Solutions
                            </Link>
                            <Link
                                href="/contacts"
                                className={`text-lg font-medium transition-all duration-200 pb-6 ${isActive("/contacts")
                                    ? "text-green-500 border-b-4 border-green-500"
                                    : "text-gray-900 hover:text-green-500"
                                    }`}
                            >
                                Contact Us
                            </Link>
                        </div>

                        {/* Call to Action or User Section */}
                        <div className="hidden md:flex items-center space-x-4 relative">
                            {user ? (
                                <div id="user-dropdown" className="relative">
                                    {/* User Avatar */}
                                    <button
                                        onClick={() => setShowDropdown((prev) => !prev)} // Toggle dropdown
                                        className="focus:outline-none"
                                    >
                                        <img
                                            src={user.profilePicture || "https://via.placeholder.com/30"}
                                            alt="User"
                                            className="w-12 h-12 rounded-full ring-2 ring-green-500 cursor-pointer"
                                        />
                                    </button>
                                    {/* Dropdown */}
                                    {showDropdown && (
                                        <div className="absolute right-0 mt-2 w-60 bg-white border rounded-lg shadow-lg overflow-hidden">
                                            {/* User Info */}
                                            <div className="px-4 py-4 bg-gray-50">
                                                <div className="flex items-center space-x-4">
                                                    <img
                                                        src={user.profilePicture || "https://via.placeholder.com/50"}
                                                        alt="User Avatar"
                                                        className="w-10 h-10 rounded-full ring-2 ring-green-500"
                                                    />
                                                    <div>
                                                        <p className="font-semibold text-gray-900">{user.name || "John Doe"}</p>
                                                        <p className="text-sm text-gray-500">{user.email || "user@example.com"}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="border-gray-200" />

                                            {/* Dropdown Options */}
                                            <div className="py-2">
                                                <button
                                                    className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-green-500"
                                                    onClick={() => alert("Profile clicked!")}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5 mr-3 text-gray-400"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5.121 17.804A6 6 0 1115.804 7.12m-2.683 10.048a8 8 0 10-11.314 0M12 14v7m-3-3h6"
                                                        />
                                                    </svg>
                                                    Profile
                                                </button>
                                                <button
                                                    className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-green-500"
                                                    onClick={() => alert("Settings clicked!")}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5 mr-3 text-gray-400"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M12 4v16m8-8H4"
                                                        />
                                                    </svg>
                                                    Settings
                                                </button>
                                            </div>
                                            <hr className="border-gray-200" />

                                            {/* Logout */}
                                            <div className="py-2 bg-red-50">
                                                <button
                                                    onClick={logout} // Logout function
                                                    className="flex items-center w-full px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-100"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5 mr-3"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M17 16l4-4m0 0l-4-4m4 4H7"
                                                        />
                                                    </svg>
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            ) : (
                                <Link
                                    href="/auth/login"
                                    className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white bg-green-500 border border-transparent rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {expanded && (
                        <nav className="md:hidden">
                            <div className="px-1 py-8">
                                <div className="grid gap-y-7">
                                    <Link
                                        href="/"
                                        onClick={() => setExpanded(false)} // Close menu on link click
                                        className={`flex items-center p-3 -m-3 text-base font-medium transition-all duration-200 rounded ${isActive("/")
                                            ? "text-green-500 bg-gray-100"
                                            : "text-gray-900 hover:bg-gray-50"
                                            }`}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="/products"
                                        onClick={() => setExpanded(false)} // Close menu on link click
                                        className={`flex items-center p-3 -m-3 text-base font-medium transition-all duration-200 rounded ${isActive("/products")
                                            ? "text-green-500 bg-gray-100"
                                            : "text-gray-900 hover:bg-gray-50"
                                            }`}
                                    >
                                        Products
                                    </Link>
                                    <Link
                                        href="/contacts"
                                        onClick={() => setExpanded(false)} // Close menu on link click
                                        className={`flex items-center p-3 -m-3 text-base font-medium transition-all duration-200 rounded ${isActive("/contact")
                                            ? "text-green-500 bg-gray-100"
                                            : "text-gray-900 hover:bg-gray-50"
                                            }`}
                                    >
                                        Contact Us
                                    </Link>
                                    {user ? (
                                        <button
                                            onClick={() => {
                                                logout(); // Logout function
                                                setExpanded(false); // Close menu
                                            }}
                                            className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50"
                                        >
                                            Logout
                                        </button>
                                    ) : (
                                        <Link
                                            href="/auth/login"
                                            onClick={() => setExpanded(false)} // Close menu on link click
                                            className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50"
                                        >
                                            Login
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </nav>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Navbar;
