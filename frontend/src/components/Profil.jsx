import { sekarwangiMap } from "../assets/images/index"

const Profil = () => {
    return (
        <main className="flex min-h-screen justify-center w-full pt-56 p-3">
            <section className="flex flex-col md:w-[70%] xl:w-[55%] gap-4">
                <div className="w-full">
                    <h1 className="text-3xl text-center">
                        Wilayah Desa
                    </h1>
                </div>
                <div>
                    <div className="flex justify-center">
                        <img 
                        src={sekarwangiMap}
                        alt="Map Sekarwangi"
                        className="my-2"
                        />
                    </div>

                    <p className="text-justify">
                        Desa Sekarwangi  Kecamatan Rawamerta Kabupaten Karawang berada di daerah 
                        dataran/ pesawahan dengan ketinggian 7,5 m di atas permukaan laut, memiliki 
                        luas wilayah seluas 369,880 Ha terdiri dari sawah 305,859 Ha dan darat 64,021 Ha.
                        Berjarak 5,8 km dari Kota Kecamatan, 12 km dari Kota Kabupaten, 117 km dari 
                        Ibu Kota Provinsi dan 71 km dari Ibu Kota Jakarta. 
                        <br />
                        <br />
                        Desa Sekarwangi merupakan Desa yang berada di daerah dataran rendah pantai utara
                        Pulau Jawa Barat, dengan ketinggian 19 M diatas permukaan laut. Sebagian besar wilayah
                        Desa adalah lahan pertanian/sawah.
                        <br />
                        <br />
                        Desa Sekarwangi mempunyai suhu rata-rata 320C pada siang hari dan 270C pada malam hari. 
                        Sedangkan curah hujan rata-rata 2.800 mm/tahun dengan curah hujan terbanyak pada bulan 
                        Desember sampai dengan April (lima bulan) pada setiap tahunnya.
                        <br />
                        <br />
                        Iklim Desa Sekarwangi sebagaimana Desa-Desa lain di wilayah Indonesia mempunyai Iklim 
                        kemarau dan penghujan, hal tersebut  mempunyai pengaruh langsung terhadap pola tanam 
                        yang ada di Desa Sekarwangi	Kecamatan Rawamerta.
                        <br />
                        <br />
                        Desa Sekarwangi terbagi dalam  3  Dusun, 3 RW dan  11 RT,  masing-masing sebagai berikut :
                        1. Dusun Krajan  terdiri dari RW 01 RT 001 s/d RT 005         
                        2. Dusun Patengong terdiri dari RW 02 RT. 001 s/d 004
                        3. Dusun Cilele  terdiri dari RW 03 RT 001 s/d RT 002
                        <br />
                        <br />
                        Luas Desa seluruhnya 370,45 Ha, terdiri dari lahan sawah 288,45 Ha (77,9%) dan tanah 
                        darat 82 Ha (22,1%). Untuk lebih jelasnya mengenai luas dan penggunaan tanah dapat 
                        dilihat pada tabel dibawah ini.
                        <br />
                        <br />
                    </p>
                </div>
                <div className="overflow-x-auto min-w-[365px]">
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
                
            </section>
        </main>
    );
};

export default Profil;