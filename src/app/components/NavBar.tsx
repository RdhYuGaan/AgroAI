"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../context/AuthContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [expanded, setExpanded] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Function to check if the link is active
  const isActive = (path: string) => pathname === path;

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    // Attach the listener when dropdown is open
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="bg-white border-b">
      <header className="relative z-10 py-2">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="/images/agro-ai-logo.png"
                  alt="Logo"
                  className="w-10 h-10 rounded-full"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                aria-label="Toggle menu"
              >
                {expanded ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex md:items-center md:justify-center md:space-x-10 md:absolute md:inset-y-0 md:left-1/3 md:translate-x-1/3 lg:space-x-8 md:mt-8">
              <Link
                href="/"
                className={`text-lg font-medium transition-all duration-200 pb-6 ${
                  isActive("/") ? "text-green-500 border-green-500" : "text-gray-900 hover:text-green-500"
                }`}
              >
                Home
              </Link>
              <Link
                href="/our-solutions"
                className={`text-lg font-medium transition-all duration-200 pb-6 ${
                  isActive("/our-solutions") ? "text-green-500 border-green-500" : "text-gray-900 hover:text-green-500"
                }`}
              >
                Our Solutions
              </Link>
              <Link
                href="/our-production"
                className={`text-lg font-medium transition-all duration-200 pb-6 ${
                  isActive("/our-production") ? "text-green-500 border-green-500" : "text-gray-900 hover:text-green-500"
                }`}
              >
                Our Production
              </Link>
              <Link
                href="/contacts"
                className={`text-lg font-medium transition-all duration-200 pb-6 ${
                  isActive("/contacts") ? "text-green-500 border-green-500" : "text-gray-900 hover:text-green-500"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* User Section (Desktop) */}
            {user ? (
              <div className="hidden md:flex items-center space-x-4 relative" ref={dropdownRef}>
                {/* Alerts Icon */}
                <Link href="/alerts">
                  <img
                    src="/images/bell-icon.png"
                    alt="Alerts"
                    className="w-12 h-12 cursor-pointer"
                  />
                </Link>

                {/* User Profile Dropdown */}
                <button
                  onClick={() => setShowDropdown((prev) => !prev)}
                  aria-label="User menu"
                >
                  <img
                    src="/images/user-01.png"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                </button>

                {showDropdown && (
                  <div className="absolute right--1 mt-28 w-48 bg-white border rounded-lg shadow-lg">
                    <div className="px-4 py-3 bg-gray-50">
                      <p className="text-sm text-gray-500">
                        {user.email.split("@")[0]}
                      </p>
                    </div>
                    <hr />
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                {/* Login Button */}
                <Link href="/auth/login">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Login
                  </button>
                </Link>
                {/* Signup Button */}
                <Link href="/auth/register">
                  <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white">
                    Signup
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {expanded && (
          <nav className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className={`block text-base font-medium ${
                  isActive("/") ? "text-green-500" : "text-gray-900 hover:text-green-500"
                }`}
                onClick={() => setExpanded(false)}
              >
                Home
              </Link>
              <Link
                href="/our-solutions"
                className={`block text-base font-medium ${
                  isActive("/our-solutions")
                    ? "text-green-500"
                    : "text-gray-900 hover:text-green-500"
                }`}
                onClick={() => setExpanded(false)}
              >
                Our Solutions
              </Link>
              <Link
                href="/our-production"
                className={`block text-base font-medium ${
                  isActive("/our-production")
                    ? "text-green-500"
                    : "text-gray-900 hover:text-green-500"
                }`}
                onClick={() => setExpanded(false)}
              >
                Our Production
              </Link>
              <Link
                href="/contacts"
                className={`block text-base font-medium ${
                  isActive("/contacts")
                    ? "text-green-500"
                    : "text-gray-900 hover:text-green-500"
                }`}
                onClick={() => setExpanded(false)}
              >
                Contact Us
              </Link>
              {user ? (
                <>
                  <Link
                    href="/alerts"
                    className="block text-base font-medium text-gray-900 hover:text-green-500"
                    onClick={() => setExpanded(false)}
                  >
                    Alerts
                  </Link>
                  <button
                    onClick={() => setShowDropdown((prev) => !prev)}
                    className="block w-full text-left text-base font-medium text-gray-900 hover:text-green-500"
                  >
                    {user.email.split("@")[0]}
                  </button>
                  {showDropdown && (
                    <div className="px-4 py-3 bg-gray-50 border rounded-lg shadow-lg">
                      <button
                        onClick={() => {
                          logout();
                          setExpanded(false);
                        }}
                        className="block w-full text-left text-sm text-red-500 hover:bg-red-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    className="block text-base font-medium text-gray-900 hover:text-green-500"
                    onClick={() => setExpanded(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/register"
                    className="block text-base font-medium text-gray-900 hover:text-green-500"
                    onClick={() => setExpanded(false)}
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
