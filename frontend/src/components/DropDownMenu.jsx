import { Link } from "react-router-dom";
import { navbarLink } from "../const";

const DropDownMenu = () => {
    return (
    <div className="dropdown bg-green-600 w-full flex justify-center">
        <div tabIndex={0} role="button" className="btn-wide flex justify-center">
         <button className="btn btn-square btn-ghost text-white">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
         </button>
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 
        z-[1] p-2 shadow w-full mt-12">
            <li>
                {navbarLink.map((link, index) => (
                    <Link key={index} to={link.to}
                    className="link link-hover">
                        {link.label}
                    </Link>
                ))}
            </li>
        </ul>
    </div>
    );
};

export default DropDownMenu;