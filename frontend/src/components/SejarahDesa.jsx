import { daftarKaDes } from "../const";

const SejarahDesa = () => {
    return (
        <main className="flex min-h-screen justify-center w-full pt-56 p-3">
            <section className="flex flex-col md:w-[70%] xl:w-[55%] gap-3
            mb-8">
                <div className="w-full mb-1">
                    <h1 className="font-inter text-3xl mb-2 font-bold">
                        Sejarah Desa
                    </h1>
                    <p className="text-sm text-base-300">
                        Muhammad Amer | {" "}
                        <span>
                            Senin 5 Agustus 2024
                        </span> 
                    </p>
                </div>
                <div className="font-inter text-justify">
                    <p>
                        Desa Sekarwangi adalah salah satu Desa dari 13 Desa yang ada di Kecamatan Rawamerta 
                        Kabupaten Karawang. Desa ini merupakan Desa Pemekaran dari Desa Induk yaitu Desa 
                        Rawagede, yang sekarang menjadi Desa Balongsari. Pada tahun 1976 Desa Induk Rawagede
                        dimekarkan menjadi dua Desa yaitu Desa Rawagede dan Desa Mekarjaya dan selanjutnya 
                        Desa Rawagede pun diganti menjadi Desa Balongsari. Pada Tahun 1978 Desa Balongsari 
                        kembali dimekarkan lagi menjadi dua Desa yaitu Desa Balongsari dan Desa Sekarwangi, 
                        disinilah mulai terbentuk Desa Sekarwangi. 
                        <br />
                        <br />
                        Mengapa Desa Pemekaran dinamakan Desa Sekarwangi ? Menurut tokoh masyarakat disini yang
                        sekarang menjadi Kepala Desa Sekarwangi, Ia menceritakan, Sekar artinya kembang(Bunga)
                        wangi artinya harum. Jadi Sekarwangi adalah sebuah Desa yang berkembang diumpamakan 
                        seperti bunga/kembang yang sedang mekar sehingga mengeluarkan wangi yang sedap. Arti 
                        lain nama Desa Sekarwangi yaitu Desa yang selalu ingin membangun baik Fisik maupun 
                        sumberdaya manusianya sehingga bisa mengharumkan nama Desa Sekarwangi itu sendiri. 
                        Jadi tahun 1978 merupakan tahun kelahiran/berdirinya Desa Sekarwangi sekarang.
                        <br />
                        <br />
                    </p>
                    <p className="xl:text-center">
                        Berikut daftar nama-nama kepala Desa Sekarwangi sejak tahun 1978 adalah :
                    </p>
                </div>
                <div>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {daftarKaDes.map((kades, index) => (
                        <li key={index}>
                            <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                            </svg>
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">{ kades.tahun }</time>
                            <div className="text-lg font-black">{ kades.nama }</div>
                                { kades.ket }
                            </div>
                            <hr />
                        </li>
                    ))}
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default SejarahDesa;
