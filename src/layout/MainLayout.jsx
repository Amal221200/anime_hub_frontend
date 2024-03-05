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
                <div className="min-h-[calc(100vh-45px)] mt-[120px]">
                    <Outlet />
                </div>
                <Footer />
            </AnimeProvider>
        </AuthProvider>
    );
}

export default MainLayout;