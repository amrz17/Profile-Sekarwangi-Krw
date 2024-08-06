import DataLayout from "../layout/DataLayout"
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { dataPekerjaan, COLORS } from "../const";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.25;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DataPekerjaan = () => {
    return (
        <DataLayout>
            <div className="w-full">
                <h1 className="font-inter text-3xl font-bold text-center
                    text-gray-500">
                    DATA PEKERJAAN
                </h1>
            </div>
            <div className="mx-auto">
                <PieChart width={360} height={540} >
                        <Pie
                            data={dataPekerjaan}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label={renderCustomizedLabel}
                        >
                            {dataPekerjaan.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                </PieChart>
            </div>
            <div className="text-justify">
                <p>
                    Data demografi berdasarkan mata pencaharian menggambarkan distribusi pekerjaan 
                    dalam suatu populasi, memberikan wawasan penting tentang struktur ekonomi dan 
                    sosial masyarakat. Analisis ini dapat mengungkapkan tren ekonomi yang sedang berlangsung, seperti pergeseran
                    dari ekonomi berbasis pertanian ke industri atau jasa. Selain itu, data ini juga mencerminkan
                    tingkat pendidikan dan keterampilan tenaga kerja, serta dapat menunjukkan kesenjangan atau
                    ketimpangan dalam akses terhadap peluang ekonomi. Dengan Kondisi sosial yang berbeda antar dusun yang berada 
                    di Desa Sekarwangi, memungkinkan mata pencaharian yang ada di Desa Sekarwangi 
                    sangat beragam, dan berdasarkan karakteristik dusun yang berbeda.
                </p>
            </div>
            <h2 className="text-center font-inter text-gray-500 font-bold my-2
            md:text-xl">
                JUMLAH PENDUDUK BERDASARKAN MATA PENCAHARIAN
            </h2>
            <div className="overflow-x-auto w-[360px] md:w-[580px] xl:w-full mx-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Pekerjaan / Mata Pencaharian</th>
                        <th>Jumlah</th>
                        <th>Persentase</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr className="hover">
                        <th>1.</th>
                        <td>Tidak / Belum Bekerja</td>
                        <td>56</td>
                        <td>4%</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                        <th>2.</th>
                        <td>Mengurus Rumah Tangga</td>
                        <td>450</td>
                        <td>31%</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                        <th>3.</th>
                        <td>Pelajar / Mahasiswa</td>
                        <td>492</td>
                        <td>34%</td>
                    </tr>
                    {/* row 4 */}
                    <tr className="hover">
                        <th>4.</th>
                        <td>Pensiunan</td>
                        <td>2</td>
                        <td>0%</td>
                    </tr>
                    {/* row 5 */}
                    <tr className="hover">
                        <th>5.</th>
                        <td>Pegawai Negri Sipil (PNS)</td>
                        <td>-</td>
                        <td>0%</td>
                    </tr>
                    {/* row 6 */}
                    <tr className="hover">
                        <th>6.</th>
                        <td>Kepolisian RI (Polri)</td>
                        <td>2</td>
                        <td>0%</td>
                    </tr>
                    {/* row 7 */}
                    <tr className="hover">
                        <th>7.</th>
                        <td>Perdagangan</td>
                        <td>6</td>
                        <td>0%</td>
                    </tr>
                    {/* row 8 */}
                    <tr className="hover">
                        <th>8.</th>
                        <td>Petani/Perkebunan</td>
                        <td>94</td>
                        <td>6%</td>
                    </tr>
                    {/* row 9 */}
                    <tr className="hover">
                        <th>9.</th>
                        <td>Industri</td>
                        <td>-</td>
                        <td>0%</td>
                    </tr>
                    {/* row 10 */}
                    <tr className="hover">
                        <th>10.</th>
                        <td>Konstruksi</td>
                        <td>-</td>
                        <td>0%</td>
                    </tr>
                    {/* row 11 */}
                    <tr className="hover">
                        <th>11.</th>
                        <td>Karyawan Swasta</td>
                        <td>68</td>
                        <td>5%</td>
                    </tr>
                    {/* row 12 */}
                    <tr className="hover">
                        <th>12.</th>
                        <td>Karyawan BUMN</td>
                        <td>-</td>
                        <td>0%</td>
                    </tr>
                    {/* row 13 */}
                    <tr className="hover">
                        <th>13.</th>
                        <td>Karyawan Honerer</td>
                        <td>6</td>
                        <td>0%</td>
                    </tr>
                    {/* row 14 */}
                    <tr className="hover">
                        <th>14.</th>
                        <td>Buruh Harian Lepas</td>
                        <td>53</td>
                        <td>4%</td>
                    </tr>
                    {/* row 15 */}
                    <tr className="hover">
                        <th>15.</th>
                        <td>Buruh Tani / Perkebunan</td>
                        <td>50</td>
                        <td>3%</td>
                    </tr>
                    {/* row 16 */}
                    <tr className="hover">
                        <th>16.</th>
                        <td>Asisten Rumah Tangga</td>
                        <td>8</td>
                        <td>1%</td>
                    </tr>
                    {/* row 17 */}
                    <tr className="hover">
                        <th>17.</th>
                        <td>Tukang Batu</td>
                        <td>4</td>
                        <td>0%</td>
                    </tr>
                    {/* row 18 */}
                    <tr className="hover">
                        <th>18.</th>
                        <td>Tukang Kayu</td>
                        <td>4</td>
                        <td>0%</td>
                    </tr>
                    {/* row 19 */}
                    <tr className="hover">
                        <th>19.</th>
                        <td>Tukang Las / Pandai Besi</td>
                        <td>3</td>
                        <td>0%</td>
                    </tr>
                    {/* row 20 */}
                    <tr className="hover">
                        <th>20.</th>
                        <td>Tukang Jahit</td>
                        <td>32</td>
                        <td>2%</td>
                    </tr>
                    {/* row 21 */}
                    <tr className="hover">
                        <th>21.</th>
                        <td>Mekanik</td>
                        <td>3</td>
                        <td>0%</td>
                    </tr>
                    {/* row 22 */}
                    <tr className="hover">
                        <th>22.</th>
                        <td>Juru Masak</td>
                        <td>10</td>
                        <td>1%</td>
                    </tr>
                    {/* row 23 */}
                    <tr className="hover">
                        <th>23.</th>
                        <td>Dosen</td>
                        <td>-</td>
                        <td>0%</td>
                    </tr>
                    {/* row 24 */}
                    <tr className="hover">
                        <th>24.</th>
                        <td>Guru</td>
                        <td>15</td>
                        <td>1%</td>
                    </tr>
                    {/* row 25 */}
                    <tr className="hover">
                        <th>25.</th>
                        <td>Bidan</td>
                        <td>3</td>
                        <td>3%</td>
                    </tr>
                    {/* row 26 */}
                    <tr className="hover">
                        <th>26.</th>
                        <td>Perawat</td>
                        <td>1</td>
                        <td>0%</td>
                    </tr>
                    {/* row 27 */}
                    <tr className="hover">
                        <th>27.</th>
                        <td>Sopir</td>
                        <td>18</td>
                        <td>1%</td>
                    </tr>
                    {/* row 28 */}
                    <tr className="hover">
                        <th>28.</th>
                        <td>Pedagang</td>
                        <td>70</td>
                        <td>5%</td>
                    </tr>
                    {/* row 29 */}
                    <tr className="hover">
                        <th>29.</th>
                        <td>Perangkat Desa</td>
                        <td>10</td>
                        <td>1%</td>
                    </tr>
                    {/* row 30 */}
                    <tr className="hover">
                        <th>30.</th>
                        <td>Wiraswasta</td>
                        <td>8</td>
                        <td>1%</td>
                    </tr>
                    {/* row Jumlah */}
                    <tr className="hover">
                        <th></th>
                        <th>Total</th>
                        <th>1.468</th>
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

export default DataPekerjaan;