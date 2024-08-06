import { Link } from "react-router-dom";
import { gender, jobs, lembagaAgama, sawah, mapSekarwangi, pendidikan, sopd, umur  } from "../assets/images/index"

const Hero = () => {
    return (
        <main className="flex flex-col">
            <section
            className="hero h-screen carousel-item relative w-full shadow-xl"
            style={{
                backgroundImage: `url(${sawah})`,
            }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-md xl:max-w-xl">
                        <h1 className="pt-[50%] mb-5 text-5xl md:text-6xl xl:text-7xl font-bold">
                            Selamat Datang di Website Desa Sekarwangi Karawang
                        </h1>
                    </div>
                </div>
            </section>
            <section className="my-8 xl:my-0 xl:h-[40rem] flex">
                <div className="w-full flex justify-center items-center p-2 xl:p-0">
                    <div className="flex border border-base-300 xl:w-[62rem] 
                    h-[34rem]  md:h-[26rem] xl:min-h-[300px] xl:h-32 rounded-md shadow-xl">
                        <div className="flex flex-col gap-2 xl:w-[60%] p-4 xl:p-8">
                            <div className="xl:hidden flex justify-center xl:w-[39%]">
                                <img 
                                src={mapSekarwangi} 
                                width={280}
                                alt="Map Sekarwangi"
                                />
                            </div>
                            <h2 className="text-3xl">Profil Sekarwangi</h2>
                            <p>
                            Desa Sekarwangi  Kecamatan Rawamerta Kabupaten Karawang berada di daerah 
                            dataran/ pesawahan dengan ketinggian 7,5 m di atas permukaan laut, memiliki 
                            luas wilayah seluas 369,880 Ha terdiri dari sawah 305,859 Ha dan darat 64,021 Ha.
                            Berjarak 5,8 km dari Kota Kecamatan, 12 km dari Kota Kabupaten, 117 km dari 
                            Ibu Kota Provinsi dan 71 km dari Ibu Kota Jakarta. 
                            </p>
                            <div className="flex justify-end">
                                <Link to="/profil/wilayah-desa">
                                    <button className="btn">
                                        Selengkapnya
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="hidden xl:flex xl:w-[39%]">
                            <img 
                            src={mapSekarwangi} 
                            alt="Map Sekarwangi"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mx-auto flex flex-col my-14 text-center">
                <h2 className="text-3xl font-bold">STRUKTUR PEMERINTAHAN</h2>
                <div className="carousel-item w-[24rem] md:w-[36rem] xl:w-[48rem]
                mx-auto">
                    <img
                    src={sopd}
                    className="rounded-box" />
                </div>
            </section>
            <section className="mb-12">
                <h1 className="font-inter text-center text-3xl font-bold">
                    DATA PENDUDUK
                </h1>
                <div className="flex flex-col xl:grid xl:grid-cols-3 
                gap-4 justify-center items-center xl:w-[80%] xl:mx-auto">
                    <div className="card bg-base-100 w-[22rem] h-[425px] shadow-xl xl:mx-auto">
                        <figure className="px-10 pt-10">
                            <img
                            src={lembagaAgama}
                            height={211}
                            alt="Shoes"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Data Agama</h2>
                            <p>Data Agama yang dianut penduduk Desa Sekarwangi</p>
                            <div className="card-actions">
                            <Link to="/data/data-agama">
                                <button className="btn">Selengkapnya</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-[22rem] h-[425px] shadow-xl xl:mx-auto">
                        <figure className="px-10 pt-10">
                            <img
                            src={gender}
                            alt="Shoes"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Data Jenis Kelamin</h2>
                            <p>Data jumlah penduduk berdasarkan jenis kelamin di Desa Sekarwangi</p>
                            <div className="card-actions">
                            <Link to="/data/data-gender">
                                <button className="btn">Selengkapnya</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-[22rem] h-[425px] shadow-xl xl:mx-auto">
                        <figure className="px-10 pt-10">
                            <img
                            src={umur}
                            alt="Shoes"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Data Rentang Umur</h2>
                            <p>Data jumlah penduduk berdasarkan umur di Desa Sekarwangi</p>
                            <div className="card-actions">
                            <Link to="/data/data-umur">
                                <button className="btn">Selengkapnya</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-[22rem] h-[425px] shadow-xl xl:mx-auto">
                        <figure className="px-10 pt-10">
                            <img
                            src={pendidikan}
                            alt="Shoes"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Data Pendidikan</h2>
                            <p>Data pendidikan yang ditempuh oleh penduduk di Desa Sekarwangi</p>
                            <div className="card-actions">
                            <Link to="/data/data-pendidikan">
                                <button className="btn">Selengkapnya</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-[22rem] h-[425px] shadow-xl xl:mx-auto">
                        <figure className="px-10 pt-10">
                            <img
                            src={jobs}
                            alt="Shoes"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Data Pekerjaan</h2>
                            <p>Data pekerjaan penduduk di Desa Sekarwangi</p>
                            <div className="card-actions">
                            <Link to="/data/data-pekerjaan">
                                <button className="btn">Selengkapnya</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Hero;