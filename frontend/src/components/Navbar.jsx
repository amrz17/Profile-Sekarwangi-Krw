import { logoKarawang  } from "../assets/images";
import { Link } from "react-router-dom";
import { navbarLink } from "../const";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
    return (
    <nav className="navbar bg-base-100 flex flex-col fixed w-full
    z-10 gap-3 p-0 pt-4">
        <div className="flex flex-col md:flex-row justify-center w-full
        md:gap-4">
            <div className="navbar-center ">
                <img 
                src={logoKarawang}
                alt="logoKarawang" 
                className="w-[50px] xl:w-[65px]"
                />
            </div>
            <div className="xl:hidden text-center">
                <p className="text-sm md:text-md">Desa Sekarwangi <br /> 
                Kecamatan Rawamerta <br /> Kabupaten Karawang</p>
            </div>
            <div className="hidden xl:flex">
                <p>Desa Sekarwangi <br /> 
                Kecamatan Rawamerta <br /> Kabupaten Karawang</p>
            </div>
        </div>
        <div className="navbar bg-green-600 xl:flex-col justify-center 
        gap-4 hidden md:flex">
            <div className="gap-10 text-white">
            {navbarLink.map((link, index) => (
                <Link key={index} to={link.to}
                className="link link-hover">
                    {link.label}
                </Link>
            ))}
            </div>
        </div>
        <div className="md:hidden w-full">
            <DropDownMenu />
        </div>
    </nav>
    )
};

export default Navbar;

