import { User, LogOut, LogIn, Search } from "lucide-react";
import logo from "../img/logo.jpg";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const { user, signOut } = useContext(AuthContext);
    const headerRef = useRef();
    const scrollY = useRef(window.scrollY)
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY.current < window.scrollY) {
                headerRef.current.classList.replace('top-0', 'top-[-100%]')
            } else if (scrollY.current > window.scrollY) {
                headerRef.current.classList.replace('top-[-100%]', 'top-0')
            }
            scrollY.current = window.scrollY
        })
    }, [user])
    
    const handleSearch = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const searchText = formData.get('search')
        
        if (searchText === '') {
            return navigate('/');
        }
        
        navigate(`/search?title=${searchText}`)
    }
    
    return (
        <header ref={headerRef} className="fixed top-0 left-0 right-0 text-white z-[100] header-transition bg-black/90">
            <div className="flex justify-between items-center px-3 py-2 max-w-[90vw] mx-auto">
                <div className="w-[100px]">
                    <Link to={"/"}>
                        <img src={logo} alt="logo" className="w-full" />
                    </Link>
                </div>
                <form onSubmit={handleSearch} className="w-[50vw] rounded-full overflow-hidden bg-zinc-800 flex items-center">
                    <input type="search" name="search" id="search" className="w-[95%] px-3 py-2 rounded-full bg-transparent outline-none" placeholder="Search anime" />
                    <button type="submit">
                        <Search size={20} />
                    </button>
                </form>
                <div className="flex items-center gap-5">
                    {!user && <User />}
                    <div className="flex">
                        {user ? (
                            <span className="flex items-center justify-center gap-3">
                                <span className="text-center text-black bg-white rounded-full h-7 w-7">{user?.username?.at(0)?.toUpperCase()}</span>
                                <LogOut className="cursor-pointer" onClick={signOut} />
                            </span>
                        ) :
                            <Link to="/sign-in" className="flex gap-3">Login <LogIn /></Link>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;