'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation'; // Import useRouter
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase"; 
import { useAuth } from "@/app/context/AuthContext";

const Login = () => {
    const { login } = useAuth();
    const navigate = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            login(userCredential.user); // Update auth context with Firebase user
            navigate.push('/');
        } catch (error) {
            console.error(error);
            setError(getFirebaseErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    const getFirebaseErrorMessage = (error) => {
        switch (error.code) {
            case 'auth/invalid-email':
                return 'Invalid email format';
            case 'auth/user-not-found':
                return 'No user found with this email';
            case 'auth/wrong-password':
                return 'Incorrect password';
            case 'auth/too-many-requests':
                return 'Too many attempts. Try again later';
            default:
                return 'Login failed. Please try again';
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0 ">
                <img
                    className="w-auto h-full"
                    src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
                    alt="Background Pattern"
                />
            </div>
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 relative z-10">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>
                <p className="text-center text-gray-600 mb-8">
                    Please log in
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                    <button
                        type="submit"
                        className={`w-full mt-6 py-2 font-semibold text-white rounded-xl ${
                            loading ? "bg-green-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-700"
                        }`}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm text-green-600">
                        Don't have an account?{" "}
                        <a
                            href="/auth/register"
                            className="font-semibold"
                        >
                            Register here
                        </a>
                    </p>
                </div>
                <div className="text-center mt-2">
                    <a href="/auth/reset-password" className="text-sm text-green-600 hover:underline">
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;