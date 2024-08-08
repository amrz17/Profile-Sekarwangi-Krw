import DataLayout from "../layout/DataLayout";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { dataGender, COLORS  } from "../const";

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

const DataGender = () => {
    return (
        <DataLayout>
            <div className="w-full">
                <h1 className="font-inter text-3xl font-bold text-center
                    text-gray-500">
                    DATA JENIS KELAMIN
                </h1>
            </div>
            <div className="mx-auto">
                <PieChart width={360} height={360} >
                        <Pie
                            data={dataGender}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={130}
                            fill="#8884d8"
                            dataKey="value"
                            label={renderCustomizedLabel}
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
                    Jumlah penduduk berdasarkan jenis kelamin berdasarkan data BPS (Badan Pusat Statistik)
                    Kabupaten Karawang pada tahun 2023 di Desa Sekarwangi, untuk jenis 
                    kelamin Laki-laki berjumlah 1.230 Jiwa, sedangkan untuk jenis kelamin Perempuan berjumlah 1.206 Jiwa. Data 
                    ini akan selalu berubah setiap tahun karena pendataan akan dilaksanakan 
                    setiap 1 (satu) tahun sekali yang dilaksanakan oleh seluruh RT/RW 
                    yang ada di Desa Sekarwangi. 
                </p>
            </div>
            <h2 className="text-center font-inter text-gray-500 font-bold my-2
            md:text-xl">
                JUMLAH PENDUDUK BERDASARKAN JENIS KELAMIN
            </h2>
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
            </div>
            <p className="text-xs">
                Sumber : Data BPS tahun 2023
            </p>
        </DataLayout>

    );
};

export default DataGender;