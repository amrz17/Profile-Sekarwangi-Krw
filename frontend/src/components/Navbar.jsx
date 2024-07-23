import { logoKarawang  } from "../assets/images";

const Navbar = () => {
    return (
    <div className="navbar bg-base-100 flex xl:flex-col justify-center border gap-4">
        <div className="navbar-center">
            <img 
            src={logoKarawang}
            alt="logoKarawang" 
            className="w-[50px] xl:w-[65px]"
            />
        </div>
        <div className="xl:hidden">
            <p className="text-sm md:text-md">Desa Sekarwangi <br /> 
            Kecamatan Rawamerta <br /> Kabupaten Karawang</p>
        </div>
        <div className="hidden xl:flex">
            <p className=" md:text-md">Desa Sekarwangi -
            Kecamatan Rawamerta - Kabupaten Karawang </p>
        </div>
    </div>
    )
};

export default Navbar;

