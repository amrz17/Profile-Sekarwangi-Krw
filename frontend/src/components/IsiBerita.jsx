import { berita1 } from "../assets/images";

const IsiBerita = () => {
    return (
        <main className="flex justify-center min-h-screen w-full pt-56 p-3 text-justify">
            <section className="flex flex-col md:w-[55%] gap-3 item-center">
                <div>
                    <h1 className="card-title link link-hover text-3xl">
                        Jelang HUT Karawang, Minggon Keliling Kecamatan 
                        Rawamerta Di Desa Sekarwangi, Ini Program
                    </h1>
                </div>
                <div className="flex gap-2">
                    <div className="badge badge-outline">Muhammad Amer</div>
                    <div className="badge badge-outline">25 Juli 2024</div>
                </div>
                <div className="flex flex-col gap-3">
                    <img
                        src={berita1}
                        alt="berita1" 
                        className="rounded-sm xl:w-full xl:h-[75%]"
                    />
                    <p>
                        Karawang, Jabar &ndash; Polres Karawang Polda Jabar, Rapat mingguan (Minggon)
                        keliling Kecamatan Rawamerta yang di Pimpin langsung oleh Camat Rawamerta
                        bapak Angga , rapat berlangsung di Aula Kantor Desa Sekarwangi kecamatan Rawamerta Rabu (13/09/2023).
                        <br />
                        <br />
                        Rapat minggon keliling di hadiri Para kepala Desa se-Kecamatan Rawamerta ,
                        muspika Kecamatan, Kapolsek Rawamerta, Danramil Rawamerta, Kepala Puskesmas
                        Rawamerta, dan Satpel PPKB dan perangkat Desa Sekarwangi
                        <br />
                        <br />
                        Pembukan minggon oleh Kepala Desa Sekarwangi Bapak Karta, dilanjut pembukaan
                        sambutan dan arahan oleh Camat Rawamerta dan Kapolsek Rawamerta
                        <br />
                        <br />
                        Dalam sambutanya mengintruksikan dan persiapan ulang Tahun Kabupaten Karawang 
                        ke 390, jatuh pada tanggal 14 September 2023, dengan mengambil tema
                        “Karawang Samakta, Nanjeur, Lugina”.Karawang Samakta: membangkitkan semangat 
                        persatuan dan kerjasama di tengah perbedaan, untuk menciptakan Karawang yang solid dan sejahtera.
                        <br />
                        <br />
                        Karawang Nanjeur: membawa pesan tentang upaya meraih prestasi dan keunggulan yang berkelanjutan,
                        <br />
                        <br />
                        Karawang Lugina: mengajak kita untuk memastikan kelestarian kemajuan yang abadi dan 
                        cinta yang mendalam terhadap tanah air.
                        <br />
                        <br />
                        Gabungan ketiganya menciptakan semangat unik yang mengingatkan kita akan pentingnya
                        membangun Kabupaten Karawang yang maju, berkelanjutan, dan selalu bersatu dalam bingkai kebanggaan lokal.” Jelasnya
                        <br />
                        <br />
                        Dalam sambutan terakhir Kapolres Karawang AKBP WirdhantoDalam Hadicaksono.S.IK.M.Si.,
                        melalui Kapolsek Rawamerta AKP Moh Wasis SH.,menerangkan Dalam menyambut HUT Karawang
                        Ke 390 khususnya di kecamatan Rawamerta polsek Rawamerta akan terus mendukung dan 
                        melaksanakan pengamanan semua kegiatan yang dilaksanakan oleh pemerintah kecamatan Rawamerta,
                        serta tidak lupa memberikan himbauan kamtibmas dalam acara minggon kecamatan Rawamerta.
                        <br />
                        <br />
                        Polres Karawang_AKBP Wirdhanto Hadicaksono
                    </p>
                </div>
            </section>
        </main>

    );
};

export default IsiBerita;