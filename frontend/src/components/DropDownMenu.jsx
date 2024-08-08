import { Link } from "react-router-dom";


const DropDownMenu = () => {
    return (
    <div className="dropdown bg-green-600 w-full flex justify-center">
        <div tabIndex={0} role="button" className="btn-wide flex justify-center">
            <label className="btn btn-ghost text-white">
                <svg
                        className="swap-off fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512">
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
            </label>
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100
        z-[1] p-0 shadow w-full mt-12">
            <li>
                <div className="flex-none mx-auto">
                    <ul className="menu menu-horizontal px-0">
                        <li><Link to="/">Home</Link></li>
                        <li>
                        <details>
                            <summary>Profil</summary>
                            <ul className="bg-base-100 w-[148px] rounded-t-none p-2 text-black">
                            <li><Link to="/profil/sejarah-desa">Sejarah Desa</Link></li>
                            <li><Link to="/profil/wilayah-desa">Wilayah Desa</Link></li>
                            <li><Link to="/profil/visidanmisi-desa">Visi & Misi Desa</Link></li>
                            </ul>
                        </details>
                        </li>
                        <li>
                            <details>
                                <summary>Lembaga</summary>
                                <ul className="bg-base-100 w-[120px] rounded-t-none p-2 text-black">
                                <li><Link to="/pemerintahan/sotk">Perangkat Desa</Link></li>
                                <li><Link to="/pemerintahan/bpd">Lembaga BPD</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                        <details>
                            <summary>Data</summary>
                            <ul className="bg-base-100 w-[170px] -left-14 rounded-t-none p-2">
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