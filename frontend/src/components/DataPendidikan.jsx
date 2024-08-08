import DataLayout from "../layout/DataLayout";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { dataPendidikan, COLORS } from "../const";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DataPendidikan = () => {
    return (
        <DataLayout>
            <div className="w-full">
                <h1 className="font-inter text-3xl font-bold text-center
                    text-gray-500">
                    DATA PENDIDIKAN
                </h1>
            </div>
            <div className="mx-auto">
                <PieChart width={360} height={360} >
                        <Pie
                            data={dataPendidikan}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label={renderCustomizedLabel}
                        >
                            {dataPendidikan.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                </PieChart>
            </div>
            <div className="font-inter text-justify">
                <p>
                    Sektor pendidikan adalah hal penting dan menjadi indakator suatu 
                    keberhasilan Desa dan bidang pendidikan menjadi tolak ukur tingkat kesejahteraan 
                    masyarakat suatu Desa. Dengan pendidikan yang tinggi akan mendongkrak tingkat 
                    kecakapan seseorang yang dapat mendorong munculnya keterampilan dan kreatifitas 
                    untuk menjadi lebih berkembang berwirausaha. Jika itu berhasil akan muncul lapangan
                    lapangan pekerjaan yang baru, sehingga masalah pengangguran akan teratasi dengan 
                    sendirinya. Dalam era digitalisasi pada saat ini, maka dengan pendidikan yang baik,
                    masyarakat akan lebih mudah untuk menerima informasi informasi yang menunjang untuk 
                    lebih berkreatiftas.
                </p>
            </div>
            <h2 className="text-center font-inter text-gray-500 font-bold my-2
            md:text-xl">
                JUMLAH PENDUDUK BERDASARKAN TINGKAT PENDIDIKAN
            </h2>
            <div className="overflow-x-auto min-w-[360px]">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Pendidikan</th>
                        <th>Jumlah</th>
                        <th>Persentase</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr className="hover">
                        <th>1.</th>
                        <td>Tidak / Belum Sekolah</td>
                        <td>254</td>
                        <td>10%</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                        <th>2.</th>
                        <td>Belum Tamat SD / Sederajat</td>
                        <td>304</td>
                        <td>12%</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                        <th>3.</th>
                        <td>Tamat SD / Sederajat</td>
                        <td>1.600</td>
                        <td>66%</td>
                    </tr>
                    {/* row 4 */}
                    <tr className="hover">
                        <th>4.</th>
                        <td>SLTP / Sederajat</td>
                        <td>176</td>
                        <td>7%</td>
                    </tr>
                    {/* row 5 */}
                    <tr className="hover">
                        <th>5.</th>
                        <td>SLTA / Sederajat</td>
                        <td>85</td>
                        <td>3%</td>
                    </tr>
                    {/* row 6 */}
                    <tr className="hover">
                        <th>6.</th>
                        <td>D-1 / D-2</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                    {/* row 7 */}
                    <tr className="hover">
                        <th>7.</th>
                        <td>Akademi / D-3 / S.Muda</td>
                        <td>1</td>
                        <td>0%</td>
                    </tr>
                    {/* row 8 */}
                    <tr className="hover">
                        <th>8.</th>
                        <td>D-4 / S-1</td>
                        <td>14</td>
                        <td>1%</td>
                    </tr>
                    {/* row 9 */}
                    <tr className="hover">
                        <th>9.</th>
                        <td>S2</td>
                        <td>1</td>
                        <td>0%</td>
                    </tr>
                    {/* row 10 */}
                    <tr className="hover">
                        <th>10.</th>
                        <td>S3</td>
                        <td>0</td>
                        <td>0%</td>
                    </tr>
                    {/* row 11 */}
                    <tr className="hover">
                        <th></th>
                        <th>Total</th>
                        <th>2.436</th>
                        <th>100%</th>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-xs">
                Sumber : Data BPS tahun 2023
            </p>
        </DataLayout>
    );
};

export default DataPendidikan;