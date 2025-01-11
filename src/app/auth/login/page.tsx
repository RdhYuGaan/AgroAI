'use client'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from 'next/navigation'; // Import useRouter
// import { useLoading } from "../../Context/loadingContext";
// import { useModal } from "../../Context/ModalContext";


const Login = () => {
    const { login } = useAuth();
    const navigate = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    // const { startLoading, stopLoading } = useLoading();

    // const { openSuccess, openAlert, openWarning } = useModal();


    const handleLogin = () => {
        login({ email: "User", password: "123456" });
        navigate.push('/'); // Navigate to the home page
        // openSuccess("ok");
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
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6"> Login</h1>
                <p className="text-center text-gray-600 mb-8">
                    Please log in
                </p>
                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className={`w-full mt-6 py-2 font-semibold  text-white bg-green-500 rounded-xl hover:bg-green-700  ${loading ? "bg-green-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-700"
                        }`}
                    onClick={handleLogin}
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
                <div className="text-center mt-4">
                    <p className="text-sm text-green-600">
                        Don't have an account?{" "}
                        <a
                            href="/auth/register"
                            className=" font-semibold "
                        >
                            Register here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
