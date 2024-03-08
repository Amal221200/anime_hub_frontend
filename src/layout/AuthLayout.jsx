import { Outlet } from "react-router-dom";
import AuthProvider from "../providers/AuthProvider";


export default function AuthLayout() {
    return (
        <div className="h-[100dvh] grid place-content-center">
            <AuthProvider>
                <Outlet />
            </AuthProvider>
        </div>
    )
}
