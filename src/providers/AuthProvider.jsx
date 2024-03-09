import { createContext, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../lib/config.js";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    
    const fetchSession = useCallback(async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/user/auth`, config);
            setUser(res.data);
            return res.data;
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/auth/sign-in")
                toast.error("Unauthenticated")
                setUser(null);
            }
        }
    }, [navigate]);

    useEffect(() => {
        fetchSession()
    }, [fetchSession])

    return (
        <AuthContext.Provider value={{ user, fetchSession, }}>
            {children}
        </AuthContext.Provider>
    )
}