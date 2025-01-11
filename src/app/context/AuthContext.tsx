'use client'
import { createContext, useState, useContext, useEffect } from "react";

// Create the Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        // Ensure the code runs only on the client side
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("authUser");
            const storedToken = localStorage.getItem("authToken");

            if (storedUser && storedToken) {
                setUser(JSON.parse(storedUser)); // Parse and set the user
                setToken(storedToken); // Set the token
            }
            setLoading(false); // Mark loading as complete
        }
    }, []);

    const login = (userData, authToken) => {
        setUser(userData);
        setToken(authToken);

        if (typeof window !== "undefined") {
            localStorage.setItem("authUser", JSON.stringify(userData)); // Save user to localStorage
            localStorage.setItem("authToken", authToken); // Save token to localStorage
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);

        if (typeof window !== "undefined") {
            localStorage.removeItem("authUser");
            localStorage.removeItem("authToken");
        }
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook to use Auth Context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
