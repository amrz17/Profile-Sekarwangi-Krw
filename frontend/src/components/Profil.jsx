import { sekarwangiMap } from "../assets/images/index"

const Profil = () => {
    return (
        <main className="flex min-h-screen justify-center w-full pt-56 p-3">
            <section className="flex flex-col md:w-[55%] gap-3">
                <div className="w-full">
                    <h1 className="text-3xl">
                        Wilayah Desa
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
                        Desa Sekarwangi merupakan desa penyanggah ibukota kabupaten bandung yang 
                        terletak 1 Km dari pusat pemerintahan kabupaten Bandung,  Desa Sekarwangi 
                        mempunyai luas wilayah seluas 109,33hektar. Adapun batas-batas wilayah desa Sekarwangi:
                        <br />
                        <br />
                        Sebelah Utara : Desa Katapang Kecamatan Katapang Kabupaten Bandung
                        Sebelah Selatan : Desa Cingcin  Soreang Kabupaten Bandung
                        Sebelah Timur : Desa Gandasari Kecamatan Katapang Kabupaten Bandung
                        Sebelah Barat : Desa Parung serab Kecamatan Soreang Kabupaten Bandung
                        <br />
                        <br />
                        Iklim Desa Sekarwangi, sebagaimana desa-desa lain di wilayah Indonesia 
                        mempunyai iklim kemarau dan penghujan, hal tersebut mempunyai pengaruh 
                        langsung terhadap pola tanam yang mayoritas lahannya adalah areal pertanian 
                        meskipun tidak sedikit industri textil yang ada di Desa Sekarwangi. Demografi Desa Sekarwangi :
                        <br />
                        <br />
                        1.  Luas Wilayah Desa Sekarwangi mempunyai luas wilayah 124,33Ha.
                        Terdiri dari:
                        a.Lahan pertanian                :  75,6 ha
                            Berpengairan Teknis :            -
                            Berpengairan ½ Teknis :            -
                            Tadah Hujan :           -           
                        b.Darat dan Pemukiman :          27,17     Ha   
                        <br />
                        <br />
                        2. Iklim 
                        a. Curah hujan :       700 mm/tahun
                        b. Jumlah bulan hujan :           6 bulan
                        c. Kelembaban :         32 °C
                        d. Suhu rata-rata harian :         24 °C
                        e. Tinggi Tempat dpl :       680  mdl
                        <br />
                        <br />
                    </p>

                </div>
                
                
            </section>
        </main>
    );
};

export default Profil;