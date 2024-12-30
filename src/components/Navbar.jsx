import { NavLink } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";


const Navbar = () => {

    const links = <>
        <NavLink className="hover:text-yellow-400 font-semibold" to="/">Home</NavLink>
        <NavLink className="hover:text-yellow-400 font-semibold">CONTACT us</NavLink>
        <NavLink className="hover:text-yellow-400 font-semibold">DASHBOARD</NavLink>
        <NavLink className="hover:text-yellow-400 font-semibold" to="/menu">Our Menu</NavLink>
        <NavLink className="hover:text-yellow-400 font-semibold">Our Shop</NavLink>
    </>

    return (
        <>
            <div className="navbar bg-black text-white bg-opacity-30 fixed w-full z-[100]">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-end gap-3">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-7">
                        {links}
                    </ul>
                </div>
                <div className="bg-green-800 rounded-full p-3">
                    <HiMiniShoppingCart />
                </div>
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;