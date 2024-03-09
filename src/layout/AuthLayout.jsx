import { Outlet } from "react-router-dom";


export default function AuthLayout() {
    return (
        <section className="grid w-full min-h-[100dvh] place-content-center">
            <Outlet />
        </section>
    )
}
