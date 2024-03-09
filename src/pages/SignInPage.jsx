import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast";
import { signIn } from "../lib/authControllers";

const SignInPage = () => {
    const navigate = useNavigate();

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");

        const res = await signIn({ username, password });
        if (!res) {
            toast.error("Something went wrong");
            return;
        }
       
        toast.success("Signed In");
        navigate("/");
    }, [navigate])

    return (
        <main className="p-4 border border-gray-500 rounded-md w-auth-width">
            <form className="flex flex-col gap-3 text-center " onSubmit={handleSubmit}>
                <h1 className="text-4xl font-bold">Login</h1>
                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="username" className="text-lg">Username</label>
                    <input type="text" name="username" id="username" className="w-full px-2 py-1 rounded outline-none" placeholder="Username" required />
                </div>
                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="password" className="text-lg">Password</label>
                    <input type="password" name="password" id="password" className="w-full px-2 py-1 rounded outline-none" placeholder="Password" required />
                </div>
                <button type="submit" className="py-1 text-white transition rounded bg-slate-800 hover:bg-zinc-950">Submit</button>
                <p className="text-center">{"Don't"} have an account? <Link to="/auth/sign-up" className="underline text-blue-950">Sign In</Link></p>
            </form>
        </main>
    );
}

export default SignInPage;