import { Suspense } from "react"
import Footer from "../compnents/Footer";
import Header from "../compnents/Header";
import { Outlet } from "react-router-dom";
import AuthProvider from "../providers/AuthProvider";

const MainLayout = () => {
    return (
        <AuthProvider>
            <Header />
            <div className="min-h-[calc(100vh-45px)] sm:mt-[120px] mt-[140px]">
                <Suspense>
                    <Outlet />
                </Suspense>
            </div>
            <Footer />
        </AuthProvider>
    );
}

export default MainLayout;