import { Link } from "react-router-dom";

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
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li>
                        <details>
                            <summary>Profil</summary>
                            <ul className="bg-base-100 w-[135px] -right-5 rounded-t-none p-2">
                            <li><Link to="/profil/wilayah-desa">Wilayah Desa</Link></li>
                            <li><Link to="/profil/sejarah-desa">Sejarah Desa</Link></li>
                            </ul>
                        </details>
                        </li>
                        <li><Link to="/berita-desa">Berita</Link></li>
                        <li>
                        <details>
                            <summary>Data</summary>
                            <ul className="bg-base-100 w-[170px] -left-12 rounded-t-none p-2">
                            <li><Link to="/data/data-penduduk">Data Penduduk</Link></li>
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
            </li>
        </ul>
    </div>
    );
};

export default DropDownMenu;