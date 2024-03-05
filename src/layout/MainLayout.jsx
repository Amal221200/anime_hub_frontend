import { Suspense } from "react"
import Footer from "../compnents/Footer";
import Header from "../compnents/Header";
import { Outlet } from "react-router-dom";
import AuthProvider from "../providers/AuthProvider";
import AnimeProvider from "../providers/AnimeProvider";

const MainLayout = () => {
    return (
        <AuthProvider>
            <AnimeProvider>
                <Header />
                <div className="min-h-[calc(100vh-45px)] sm:mt-[120px] mt-[140px]">
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </div>
                <Footer />
            </AnimeProvider>
        </AuthProvider>
    );
}

export default MainLayout;