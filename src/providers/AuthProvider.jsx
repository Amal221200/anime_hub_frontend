import { createContext, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ApiFetcher from "../../../admin-panel/src/lib/ApiFetcher";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const signIn = useCallback(async (user) => {
        const res = await ApiFetcher.post(`${import.meta.env.VITE_SERVER_URL}/api/user/auth`, user);
        console.log("djef");
        if (res.status !== 200) {
            return;
        }

        toast.success("Signed in successfully")
        setUser(res.data)
    }, []);

    const signUp = useCallback(async (user) => {
        const res = await ApiFetcher.post(`${import.meta.env.VITE_SERVER_URL}/api/user/sign-up`, user);

        if (res.status !== 201) {
            return;
        }

        toast.success("Created your account")
        setUser(res.data);
    }, [setUser]);

    const signOut = useCallback(async () => {
        const res = await ApiFetcher.get(`${import.meta.env.VITE_SERVER_URL}/api/user/sign-out`);

        if (res.ok !== 200) {
            return
        }
        toast.success("Logged out successfully")
        setUser(null)
    }, []);

    const fetchSession = useCallback(async () => {
        try {
            const res = await ApiFetcher.get(`${import.meta.env.VITE_SERVER_URL}/api/user/auth`);

            setUser(res.data);
            return res.data
        } catch (error) {
            if (error.response.status === 401) {
                navigate("/sign-in")
                toast.error("Unauthenticated")
                setUser(null);
            }
        }
    }, [navigate]);

    useEffect(() => {
        fetchSession()
    }, [fetchSession])

    return (
        <AuthContext.Provider value={{ user, signUp, signIn, signOut, fetchSession, }}>
            {children}
        </AuthContext.Provider>
    )
}