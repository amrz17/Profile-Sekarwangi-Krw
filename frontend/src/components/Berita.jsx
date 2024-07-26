import { berita1 } from "../assets/images/index.js"
import { Link } from "react-router-dom";

const Berita = () => {
    return (
        <main className="min-h-screen flex flex-col items-center w-full 
        pt-52 justify-center gap-6">
            <div className="card bg-base-100 flex flex-row-reverse xl:w-[758px]
            w-96 shadow-xl p-3 xl:gap-2">
                <figure>
                <img
                    src={berita1}
                    alt="Shoes" 
                    className="w-[800px] rounded-sm xl:w-full xl:h-[75%]"
                    />
                </figure>
                <div className="xl:flex xl:flex-col p-3 text-justify gap-3">
                    <div className="card-actions xl:hidden justify-start">
                        <div className="badge badge-outline">Muhammad Amer</div>
                        <div className="badge badge-outline">25 Juli 2024</div>
                    </div>
                    <Link to="/berita-desa/1">
                        <h2 className="card-title link link-hover">
                        Jelang HUT Karawang, Minggon Keliling Kecamatan Rawamerta Di Desa Sekarwangi, Ini Program
                        </h2>
                    </Link>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">Muhammad Amer</div>
                        <div className="badge badge-outline">25 Juli 2024</div>
                    </div>
                    <p className="">
                    Karawang, Jabar &ndash; Polres Karawang Polda Jabar, Rapat mingguan (Minggon) keliling Kecamatan 
                    Rawamerta yang di Pimpin langsung oleh Camat Rawamerta bapak Angga , rapat berlangsung di Aula Kantor Desa Sekarwangi kecamatan Rawamerta Rabu (13/09/2023).
                    </p>
                </div>
            </div>

            <div className="card bg-base-100 flex flex-row-reverse xl:w-[758px]
            w-96 shadow-xl p-3 xl:gap-2">
                <figure>
                <img
                    src={berita1}
                    alt="berita1" 
                    className="w-[800px] rounded-sm xl:w-full xl:h-[75%]"
                    />
                </figure>
                <div className="xl:flex xl:flex-col p-3 text-justify gap-3">
                    <div className="card-actions xl:hidden justify-start">
                        <div className="badge badge-outline">Muhammad Amer</div>
                        <div className="badge badge-outline">25 Juli 2024</div>
                    </div>
                    <Link to="/">
                        <h2 className="card-title link link-hover">
                        Jelang HUT Karawang, Minggon Keliling Kecamatan Rawamerta Di Desa Sekarwangi, Ini Program
                        </h2>
                    </Link>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">Muhammad Amer</div>
                        <div className="badge badge-outline">25 Juli 2024</div>
                    </div>
                    <p className="">
                    Karawang, Jabar &ndash; Polres Karawang Polda Jabar, Rapat mingguan (Minggon) keliling Kecamatan 
                    Rawamerta yang di Pimpin langsung oleh Camat Rawamerta bapak Angga , rapat berlangsung di Aula Kantor Desa Sekarwangi kecamatan Rawamerta Rabu (13/09/2023).
                    </p>
                </div>
            </div>
        </main>

    );
};

export default Berita;