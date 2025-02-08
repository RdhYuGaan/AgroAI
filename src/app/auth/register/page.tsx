'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../../../firebase"; // Import Firebase auth
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // For handling errors
    const router = useRouter();

    const handleRegister = async () => {
        setError(""); // Clear any previous errors

        // Validate inputs
        if (!name || !email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Update user profile with the provided name
            await updateProfile(userCredential.user, {
                displayName: name,
            });

            console.log("User registered successfully:", userCredential.user);
            router.push("/auth/login?success=Registered successfully! Please log in.");
        } catch (error) {
            console.error("Error during registration:", error.message);
            setError(error.message); // Display error message to the user
        }
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

                    {/* Display error message */}
                    {error && (
                        <div className="mb-4 p-2 bg-red-100 text-red-600 text-sm rounded-md">
                            {error}
                        </div>
                    )}

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