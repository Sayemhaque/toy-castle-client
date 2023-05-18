import Logo from "../../assets/ball.png"
import {Link} from "react-router-dom"
const Navbar = () => {
    const user = true;
    const navLinks =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="blog">Blogs</Link></li>
            {user && <>
                <li><Link to="mytoys">My toys</Link></li>
                <li><Link to="alltoys">All toys</Link></li>
                <li><Link to="addtoy">Add A toy</Link></li>
            </>}
        </>

    return (
        <div className="bg-purple-500 py-2 sticky top-0 z-50">
            <div className="navbar  md:max-w-6xl mx-auto  text-white">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content bg-black mt-3 p-2 font-bold shadow  rounded-box w-52 uppercase text-sm">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="w-12 h-12" src={Logo} alt="" />
                        <a className="btn btn-ghost normal-case font-serif font-bold text-3xl">
                            Toy Castle
                        </a>
                    </div>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal  px-1 font-bold uppercase text-sm">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000" title="username" className="w-12 h-12 mr-3" alt="" />
                   <Link to='login'> <button className="bg-white text-gray-800 font-bold px-5 py-2 rounded-lg">Log In</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;