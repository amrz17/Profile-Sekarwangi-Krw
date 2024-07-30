import DataLayout from "../layout/DataLayout";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const dataAgama = [
  { name: 'Islam', value: 2434 },
  { name: 'Khatolik', value: 0 },
  { name: 'Kristen', value: 2 },
  { name: 'Hindu', value: 0 },
  { name: 'Buddha', value: 0 },
];

const COLORS = [ '#00C49F','#0088FE', '#FFBB28', '#FF8042'];

const DataAgama = () => {
    return (
        <DataLayout>
            <div className="w-full">
                <h1 className="text-3xl text-center">
                    Data Agama
                </h1>
            </div>
            <div className="mx-auto">
                <PieChart width={360} height={360} >
                        <Pie
                            data={dataAgama}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {dataAgama.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                </PieChart>
            </div>
            <div className="overflow-x-auto min-w-[360px]">
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
            </div>
        </DataLayout>

    );
};

export default DataAgama;