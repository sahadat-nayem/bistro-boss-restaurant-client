import { NavLink } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";


const Navbar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink>CONTACT us</NavLink></li>
        <li><NavLink>DASHBOARD</NavLink></li>
        <li><NavLink>Our Menu</NavLink></li>
        <li><NavLink>Our Shop</NavLink></li>
    </>

    return (
        <>
            <div className="navbar bg-black text-white bg-opacity-15 fixed w-full z-[100]">
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
                    <ul className="menu menu-horizontal px-1">
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