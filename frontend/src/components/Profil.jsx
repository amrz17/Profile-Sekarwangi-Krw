import { mapSekarwangi } from "../assets/images/index"

const Profil = () => {
    return (
        <main className="flex min-h-screen justify-center w-full pt-56 p-3 mb-8">
            <section className="flex flex-col md:w-[70%] xl:w-[55%] gap-2">
                <div className="w-full">
                    <h1 className="text-3xl mb-2 font-bold font-inter">
                        Wilayah Desa
                    </h1>
                    <p className="text-sm text-base-300">
                        Muhammad Amer | {" "}
                        <span>
                            Senin 5 Agustus 2024
                        </span> 
                    </p>
                </div>
                <div>
                    <div className="flex justify-center">
                        <img 
                        src={mapSekarwangi}
                        alt="Map Sekarwangi"
                        />
                    </div>

                    <p className="font-inter text-justify">
                        Desa Sekarwangi  Kecamatan Rawamerta Kabupaten Karawang   
                        terbagi dalam  3  Dusun, 3 RW dan  11 RT yaitu 
                        Dusun Krajan yang terdiri dari RW 01 RT 001 s/d RT 005,         
                        Dusun Patengong yang terdiri dari RW 02 RT. 001 s/d 004,
                        dan Dusun Cilele yang terdiri dari RW 03 RT 001 s/d RT 002.
                        Desa Sekarwangi berada di daerah dataran/pesawahan dengan ketinggian 7,5 m di atas permukaan laut, memiliki 
                        luas wilayah seluas 369,880 Ha terdiri dari sawah 305,859 Ha dan darat 64,021 Ha.
                        Berjarak 5,8 km dari Kota Kecamatan, 12 km dari Kota Kabupaten, 117 km dari 
                        Ibu Kota Provinsi dan 71 km dari Ibu Kota Jakarta. 
                        Desa Sekarwangi merupakan Desa yang berada di daerah dataran rendah pantai utara
                        Pulau Jawa Barat, dengan ketinggian 19 M diatas permukaan laut. Sebagian besar wilayah
                        Desa adalah lahan pertanian/sawah.
                    </p>
                <div className="overflow-x-auto min-w-[365px] my-4">
                    <h2 className="text-center font-inter text-gray-500 font-bold mb-2
                    text-xl">
                        GEOGRAFIS DESA
                    </h2>
                    <table className="table text-center">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Lahan</th>
                            <th>Lahan</th>
                            <th>Luas (Ha)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr className="hover">
                            <th>1</th>
                            <td>Lahan Sawah</td>
                            <td>Sawah Teknis</td>
                            <td>288,45</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Lahan Darat</td>
                            <td>Pemukiman</td>
                            <td>82</td>
                        </tr>
                        {/* row 3 */}
                        <tr className="hover">
                            <th></th>
                            <th>Total</th>
                            <td></td>
                            <th>370,45</th>
                        </tr>
                        </tbody>
                    </table>
                </div>
                    <p className="text-justify">
                        Desa Sekarwangi mempunyai suhu rata-rata 320&deg;C pada siang hari dan 270&deg;C pada malam hari. 
                        Sedangkan curah hujan rata-rata 2.800 mm/tahun dengan curah hujan terbanyak pada bulan 
                        Desember sampai dengan April (lima bulan) pada setiap tahunnya.
                        Iklim Desa Sekarwangi sebagaimana Desa-Desa lain di wilayah Indonesia mempunyai Iklim 
                        kemarau dan penghujan, hal tersebut  mempunyai pengaruh langsung terhadap pola tanam 
                        yang ada di Desa Sekarwangi	Kecamatan Rawamerta.
                        <br />
                        <br />
                    </p>
                        <br />
                </div>
            </section>
        </main>
    );
};

export default Profil;