import DataLayout from "../layout/DataLayout";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const dataGender = [
  { name: 'Laki-laki', value: 1230 },
  { name: 'Perempuan', value: 1206 },
];

const COLORS = [ '#0088FE', '#FF1493' ];

const DataGender = () => {
    return (
        <DataLayout>
            <div className="w-full">
                <h1 className="text-3xl text-center">
                    Data Jenis Kelamin
                </h1>
            </div>
            <div className="mx-auto">
                <PieChart width={360} height={360} >
                        <Pie
                            data={dataGender}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {dataGender.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                </PieChart>
            </div>
            <div className="text-justify">
                <p>
                    Kondisi Demografis/Kependudukan, berdasarkan data BPS (Badan Pusat Statistik)
                    Kabupaten Karawang pada tahun 2023 jumlah Penduduk Desa Sekarwangi, berjenis 
                    Kelamin Laki laki = 1.230 Jiwa, berjenis Kelamin Perempuan = 1.206 Jiwa. Data 
                    ini akan selalu berubah setiap tahun karena pendataan/updating akan dilaksanakan 
                    setiap 1 (satu) tahun sekali, semua kegiatan ini dilaksanakan oleh seluruh RT/RW 
                    yang ada di Desa Sekarwangi. Jumlah Penduduk Berdasarkan Jumlah Jenis Kelamin.
                </p>
            </div>
            <div className="overflow-x-auto min-w-[360px]">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Jenis Kelamin</th>
                        <th>Jumlah</th>
                        <th>Persentase</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr className="hover">
                        <th>1.</th>
                        <td>Laki-laki</td>
                        <td>1.230</td>
                        <td>50%</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                        <th>2.</th>
                        <td>Perempuan</td>
                        <td>1.206</td>
                        <td>50%</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                        <th></th>
                        <th>Total</th>
                        <th>2.436</th>
                        <th>100%</th>
                    </tr>
                    </tbody>
                </table>
                <p className="text-xs">
                    Sumber : Data BPS tahun 2023
                </p>
            </div>
        </DataLayout>

    );
};

export default DataGender;