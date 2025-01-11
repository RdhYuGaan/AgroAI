'use client'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {

    };

    return (

        <>


            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0 ">
                    <img
                        className="w-auto h-full"
                        src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
                        alt="Background Pattern"
                    />
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md relative z-20">
                    <h1 className="text-3xl font-semibold text-gray-700 mb-6 text-center">
                        Create Your Account
                    </h1>

                    <div className="space-y-4">
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Create a strong password"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>



                    </div>

                    <button
                        className="mt-6 w-full px-4 py-2 text-sm font-semibold  text-white bg-green-500 rounded-xl hover:bg-green-700 "
                        onClick={handleRegister}
                    >
                        Register
                    </button>

                    <p className="mt-4 text-sm text-green-600 text-center">
                        Already have an account?{" "}
                        <a
                            href="/auth/login"
                            className=" font-semibold "
                        >
                            Log In
                        </a>
                    </p>
                </div>
            </div>
        </>


    );
};

export default Register;
