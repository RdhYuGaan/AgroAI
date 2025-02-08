'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useAuth();
    const [expanded, setExpanded] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

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
            <header className="relative z-10 py-2">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                <img src="/images/agro-ai-logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
                            </Link>
                        </div>

                        <div className="flex md:hidden">
                            <button type="button" className="text-gray-900" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
                                {expanded ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                            </button>
                        </div>

                        <div className="hidden md:flex md:items-center md:space-x-6">
                            <Link href="/" className={`text-base font-medium ${isActive("/") ? "text-green-500" : "text-gray-900 hover:text-green-500"}`}>
                                Home
                            </Link>
                            <Link href="/our-solutions" className={`text-base font-medium ${isActive("/our-solutions") ? "text-green-500" : "text-gray-900 hover:text-green-500"}`}>
                                Our Solutions
                            </Link>
                            <Link href="/our-production" className={`text-base font-medium ${isActive("/our-production") ? "text-green-500" : "text-gray-900 hover:text-green-500"}`}>
                                Our Production
                            </Link>
                            <Link href="/contacts" className={`text-base font-medium ${isActive("/contacts") ? "text-green-500" : "text-gray-900 hover:text-green-500"}`}>
                                Contact Us
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-4 relative">
                            {user ? (
                                <div id="user-dropdown" className="relative">
                                    <button onClick={() => setShowDropdown((prev) => !prev)} className="focus:outline-none">
                                        <img src="/images/user-01.png" alt="Logo" className="w-10 h-10 rounded-full" />
                                    </button>

                                    {showDropdown && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg overflow-hidden">
                                            <div className="px-4 py-3 bg-gray-50">
                                                <p className="text-sm text-gray-500">
                                                    {user.email ? user.email.replace("@gmail.com", "") : "user"}
                                                </p>
                                            </div>
                                            <hr className="border-gray-200" />
                                            <div className="py-1">
                                                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => alert("Profile clicked!")}>
                                                    Profile
                                                </button>
                                                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => alert("Settings clicked!")}>
                                                    Settings
                                                </button>
                                            </div>
                                            <hr className="border-gray-200" />
                                            <div className="py-1 bg-red-50">
                                                <button onClick={logout} className="flex items-center w-full px-4 py-2 text-sm text-red-500 hover:bg-red-100">
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link href="/auth/login" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-full hover:bg-green-600">
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>

                    {expanded && (
                        <nav className="md:hidden">
                            <div className="px-1 py-4">
                                <div className="grid gap-y-4">
                                    <Link href="/" onClick={() => setExpanded(false)} className={`flex items-center p-2 text-base font-medium ${isActive("/") ? "text-green-500 bg-gray-100" : "text-gray-900 hover:bg-gray-50"}`}>
                                        Home
                                    </Link>
                                    <Link href="/our-solutions" onClick={() => setExpanded(false)} className={`flex items-center p-2 text-base font-medium ${isActive("/our-solutions") ? "text-green-500 bg-gray-100" : "text-gray-900 hover:bg-gray-50"}`}>
                                        Our Solutions
                                    </Link>
                                    <Link href="/our-production" onClick={() => setExpanded(false)} className={`flex items-center p-2 text-base font-medium ${isActive("/our-production") ? "text-green-500 bg-gray-100" : "text-gray-900 hover:bg-gray-50"}`}>
                                        Our Production
                                    </Link>
                                    <Link href="/contacts" onClick={() => setExpanded(false)} className={`flex items-center p-2 text-base font-medium ${isActive("/contacts") ? "text-green-500 bg-gray-100" : "text-gray-900 hover:bg-gray-50"}`}>
                                        Contact Us
                                    </Link>
                                    {user ? (
                                        <button onClick={() => { logout(); setExpanded(false); }} className="flex items-center p-2 text-base font-medium text-gray-900 hover:bg-gray-50">
                                            Logout
                                        </button>
                                    ) : (
                                        <Link href="/auth/login" onClick={() => setExpanded(false)} className="flex items-center p-2 text-base font-medium text-gray-900 hover:bg-gray-50">
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