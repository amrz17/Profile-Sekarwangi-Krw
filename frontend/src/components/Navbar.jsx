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
        <div className="navbar bg-green-500 justify-center 
        hidden md:flex text-white">
            <div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-base"><Link to="/">Home</Link></li>
                        <li>
                        <details>
                            <summary className="text-base" >Profil</summary>
                            <ul className="bg-base-100 w-[148px] rounded-t-none p-2 text-black">
                            <li><Link to="/profil/sejarah-desa">Sejarah Desa</Link></li>
                            <li><Link to="/profil/wilayah-desa">Wilayah Desa</Link></li>
                            <li><Link to="/profil/visidanmisi-desa">Visi & Misi Desa</Link></li>
                            </ul>
                        </details>
                        </li>
                        <li>
                            <details>
                                <summary className="text-base">Lembaga</summary>
                                <ul className="bg-base-100 w-[148px] rounded-t-none p-2 text-black">
                                <li><Link to="/pemerintahan/sotk">Perangkat Desa</Link></li>
                                <li><Link to="/pemerintahan/bpd">Lembaga BPD</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                        <details>
                            <summary className="text-base">Data</summary>
                            <ul className="bg-base-100 w-[170px] -left-12 rounded-t-none p-2 text-black">
                            <li><Link to="/data/data-agama">Data Agama</Link></li>
                            <li><Link to="/data/data-gender">Data Jenis Kelamin</Link></li>
                            <li><Link to="/data/data-umur">Data Rentang Umur</Link></li>
                            <li><Link to="/data/data-pendidikan">Data Pendidikan</Link></li>
                            <li><Link to="/data/data-pekerjaan">Data Pekerjaan</Link></li>
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

