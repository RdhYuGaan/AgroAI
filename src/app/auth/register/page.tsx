'use client'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!name || !email || !password) {
            setError("Please fill in all fields");
            return;
        }

        try {
            setError("");
            setLoading(true);
            const auth = getAuth();
            
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            // Update user profile with name
            await updateProfile(userCredential.user, {
                displayName: name
            });

            // Navigate to home page or dashboard after successful registration
            navigate("/dashboard");
        } catch (err) {
            let errorMessage = "Failed to create an account";
            if (err.code === 'auth/email-already-in-use') {
                errorMessage = "Email already registered. Please use a different email.";
            } else if (err.code === 'auth/weak-password') {
                errorMessage = "Password should be at least 6 characters long.";
            } else if (err.code === 'auth/invalid-email') {
                errorMessage = "Please enter a valid email address.";
            }
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
                <img
                    className="w-auto h-full"
                    src="/api/placeholder/400/800"
                    alt="Background Pattern"
                />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md relative z-20">
                <h1 className="text-3xl font-semibold text-gray-700 mb-6 text-center">
                    Create Your Account
                </h1>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                            onChange={(e) => setName(e.target.value)}
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Create a strong password"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                </div>

                <button
                    className="mt-6 w-full px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-xl hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleRegister}
                    disabled={loading}
                >
                    {loading ? "Creating Account..." : "Register"}
                </button>

                <p className="mt-4 text-sm text-green-600 text-center">
                    Already have an account?{" "}
                    <a href="/auth/login" className="font-semibold">
                        Log In
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;