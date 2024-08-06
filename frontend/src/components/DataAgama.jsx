import DataLayout from "../layout/DataLayout";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { dataAgama, COLORS } from "../const"


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

const DataAgama = () => {
    return (
        <DataLayout>
            <div className="w-full">
                <h1 className="font-inter text-3xl font-bold text-center
                    text-gray-500">
                    DATA AGAMA
                </h1>
            </div>
            <div className="mx-auto">
                <PieChart width={360} height={360} >
                        <Pie
                            data={dataAgama}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                            label={renderCustomizedLabel}

                        >
                            {dataAgama.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                </PieChart>
            </div>
            <div className="text-justify">
                <p>
                    Dalam perspektif agama, masyarakat di Desa Sekarwangi 
                    termasuk masyarakat yang homogeny, hal ini di buktikan bahwasanya 
                    masyarakat Desa Sekarwangi mayoritas beragama Islam. Tingkat kemayoritasan agama Islam di Desa Sekarwangi sangat dipengaruhi oleh Kultur yang sudah lama ada di Desa Sekarwangi, selain itu pegangan agama ini diakibatkan oleh hubungan kekeluargaan dan kekerabatan  yang  ada dari dulu sampai sekarang.
                </p>
            </div>
            <h2 className="text-center font-inter text-gray-500 font-bold my-2
            md:text-xl">
                JUMLAH PENDUDUK BERDASARKAN AGAMA
            </h2>
            <div className="overflow-x-auto w-full mx-auto">
                <table className="table text-center">

                    {/* head */}
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Agama</th>
                        <th>Jumlah</th>
                        <th>Persentase</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr className="hover">
                        <th>1.</th>
                        <td>Islam</td>
                        <td>2.434</td>
                        <td>100%</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                        <th>2.</th>
                        <td>Khatolik</td>
                        <td>0</td>
                        <td>0%</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                        <th>3.</th>
                        <td>Kristen</td>
                        <td>2</td>
                        <td>0%</td>
                    </tr>
                    {/* row 4 */}
                    <tr className="hover">
                        <th>4.</th>
                        <td>Hindu</td>
                        <td>0</td>
                        <td>0%</td>
                    </tr>
                    {/* row 5 */}
                    <tr className="hover">
                        <th>5.</th>
                        <td>Buddha</td>
                        <td>0</td>
                        <td>0%</td>
                    </tr>
                    {/* row 6 */}
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

export default DataAgama;