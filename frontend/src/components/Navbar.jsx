import { logoKarawang  } from "../assets/images";
import { Link } from "react-router-dom";
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
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li>
                        <details>
                            <summary>Profil</summary>
                            <ul className="bg-base-100 rounded-t-none p-2 text-black">
                            <li><Link to="/profil/wilayah-desa">Wilayah Desa</Link></li>
                            <li><Link to="/profil/sejarah-desa">Sejarah Desa</Link></li>
                            </ul>
                        </details>
                        </li>
                        <li><Link to="/berita-desa">Berita</Link></li>
                        <li>
                        <details>
                            <summary>Data</summary>
                            <ul className="bg-base-100 rounded-t-none p-2 text-black">
                            <li><Link to="/data/data-penduduk">Data Penduduk</Link></li>
                            <li><Link to="/data/data-agama">Data Agama</Link></li>
                            </ul>
                        </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="md:hidden w-full">
            <DropDownMenu />
        </div>
    </nav>
    )
};

export default Navbar;

