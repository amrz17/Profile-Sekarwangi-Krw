import { sekarwangiMap } from "../assets/images";

const SejarahDesa = () => {
    return (
        <main className="flex min-h-screen justify-center w-full pt-56 p-3">
            <section className="flex flex-col md:w-[70%] xl:w-[55%] gap-3">
                <div className="w-full">
                    <h1 className="text-3xl">
                        Sejarah Desa
                    </h1>
                </div>
                <div className="flex gap-2">
                    <div className="badge badge-outline">Muhammad Amer</div>
                    <div className="badge badge-outline">25 Juli 2024</div>
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
                        Desa Sekarwangi adalah salah satu Desa dari 13 Desa yang ada di Kecamatan Rawamerta 
                        Kabupaten Karawang. Desa ini merupakan Desa Pemekaran dari Desa Induk yaitu Desa 
                        Rawagede, yang sekarang menjadi Desa Balongsari. Pada tahun 1976 Desa Induk Rawagede
                        dimekarkan menjadi Dua Desa yaitu Desa Rawagede dan Desa Mekarjaya dan selanjutnya 
                        Desa Rawagede pun diganti menjadi Desa Balongsari. Pada Tahun 1978 Desa Balongsari 
                        kembali dimekarkan lagi menjadi dua Desa yaitu Desa Balongsari dan Desa Sekarwangi, 
                        disinilah mulai terbentuk Desa Sekarwangi. 
                        <br />
                        <br />
                        Mengapa Desa Pemekaran dinamakan Desa Sekarwang ? Menurut Tokoh Masyarakat disini yang
                        kebetulan sekarang menjadi Kepala Desa Sekarwangi, Ia menceritakan : Sekar artinya Kembang/Bunga
                        Wangi artinya Harum. Jadi Sekarwangi adalah sebuah Desa yang berkembang diumpamakan 
                        seperti bunga / Kembang yang sedang Mekar sehingga mengeluarkan wangi yang sedap arti 
                        lain yaitu Desa yang selalu ingin membangun baik Fisik maupun sumberdaya manusianya sehingga 
                        bisa mengharumkan nama Desa Sekarwangi itu sendiri.
                        Jadi tahun 1978 merupakan Tahun Kelahiran/Berdirinya Desa Sekarwangi sekarang.
                        <br />
                        <br />
                        Berikut daftar nama-nama kepala Desa Sekarwangi sejak tahun 1978 adalah:
                    </p>
                </div>
                <div className="overflow-x-auto min-w-[365px]">
                    <table className="table text-center">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama kepala Desa</th>
                            <th>Tahun</th>
                            <th>Keterangan</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr className="hover">
                            <th>1.</th>
                            <td>M. Isol</td>
                            <td>1980 - 1985</td>
                            <td>Kepala Desa Pemekaran</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2.</th>
                            <td>Ano Suryono</td>
                            <td>1986 - 1993</td>
                            <td>Depinitif</td>
                        </tr>
                        {/* row 3 */}
                        <tr className="hover">
                            <th>3.</th>
                            <td>E. Junaedi</td>
                            <td>1993 - 1994</td>
                            <td>Pjs</td>
                        </tr>
                        {/* row 4 */}
                        <tr className="hover">
                            <th>4.</th>
                            <td>Eming Hidayat</td>
                            <td>1994 - 1998</td>
                            <td>Depinitif</td>
                        </tr>
                        {/* row 5 */}
                        <tr className="hover">
                            <th>5.</th>
                            <td>E. Junaedi</td>
                            <td>1998 - 1999</td>
                            <td>Pjs</td>
                        </tr>
                        {/* row 6 */}
                        <tr className="hover">
                            <th>6.</th>
                            <td>Didi Suryadi</td>
                            <td>2000</td>
                            <td>Pjs</td>
                        </tr>
                        {/* row 7 */}
                        <tr className="hover">
                            <th>7.</th>
                            <td>Samin Amd</td>
                            <td>2000 - 2001</td>
                            <td>Pjs</td>
                        </tr>
                        {/* row 8 */}
                        <tr className="hover">
                            <th>8.</th>
                            <td>Kusnadi Amd</td>
                            <td>2001 - 2008</td>
                            <td>Depinitif</td>
                        </tr>
                        {/* row 9 */}
                        <tr className="hover">
                            <th>9.</th>
                            <td>Suhandi</td>
                            <td>2008</td>
                            <td>Pjs</td>
                        </tr>
                        {/* row 10 */}
                        <tr className="hover">
                            <th>10.</th>
                            <td>Ano Suryono</td>
                            <td>2008 - 2014</td>
                            <td>Depinitif</td>
                        </tr>
                        {/* row 11 */}
                        <tr className="hover">
                            <th>11.</th>
                            <td>Wadma</td>
                            <td>2014 - 2015</td>
                            <td>Pjs</td>
                        </tr>
                        {/* row 12 */}
                        <tr className="hover">
                            <th>12.</th>
                            <td>Karta</td>
                            <td>2015 - 2021</td>
                            <td>Depinitif</td>
                        </tr>
                        {/* row 13 */}
                        <tr className="hover">
                            <th>13.</th>
                            <td>Karta</td>
                            <td>2022 - 2029</td>
                            <td>Depinitif</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default SejarahDesa;
