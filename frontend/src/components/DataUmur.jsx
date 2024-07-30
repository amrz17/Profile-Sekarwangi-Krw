import DataLayout from "../layout/DataLayout"
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const dataUmur = [
  { name: '0 s/d 5', value: 165 },
  { name: '6 s/d11', value: 171 },
  { name: '12 s/d 17', value: 161 },
  { name: '18 s/d 23', value: 259 },
  { name: '24 s/d 29', value: 222 },
  { name: '30 s/d 35', value: 256 },
  { name: '36 s/d 40', value: 226 },
  { name: '41 s/d 45', value: 244 },
  { name: '46 s/d 50', value: 196 },
  { name: '51 s/d 55', value: 187 },
  { name: '56 s/d 60', value: 198 },
  { name: '61 >', value: 166 },
];

const COLORS = [ '#FF5733 ', '#33FF57', '#3357FF', '#FF33A6',
    '#33FFA6', '#A633FF', '#FF8C33', '#8CFF33', '#338CFF', '#FF3380',
    '#33FF80', '#8033FF' ];

const DataUmur = () => {
    return (
        <DataLayout>
            <div className="w-full">
                <h1 className="text-3xl">
                    Data Rentang Umur
                </h1>
            </div>
            <div className="mx-auto">
                <PieChart width={360} height={400} >
                        <Pie
                            data={dataUmur}
                            dataKey="value"
                            nameKey="name" 
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        >
                            {dataUmur.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                </PieChart>
            </div>
            <div className="overflow-x-auto w-[360px] md:w-[580px] xl:w-[850px]">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Usia (Tahun)</th>
                        <th>Laki-laki</th>
                        <th>Perempuan</th>
                        <th>Jumlah</th>
                        <th>Persentase</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr className="hover">
                        <th>1.</th>
                        <td>0 s/d 5</td>
                        <td>85</td>
                        <td>80</td>
                        <td>165</td>
                        <td>7%</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                        <th>2.</th>
                        <td>6 s/d 11</td>
                        <td>82</td>
                        <td>89</td>
                        <td>171</td>
                        <td>7%</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                        <th>3.</th>
                        <td>12 s/d 17</td>
                        <td>80</td>
                        <td>81</td>
                        <td>161</td>
                        <td>7%</td>
                    </tr>
                    {/* row 4 */}
                    <tr className="hover">
                        <th>4.</th>
                        <td>18 s/d 23</td>
                        <td>133</td>
                        <td>126</td>
                        <td>259</td>
                        <td>11%</td>
                    </tr>
                    {/* row 5 */}
                    <tr className="hover">
                        <th>5.</th>
                        <td>24 s/d 29</td>
                        <td>114</td>
                        <td>108</td>
                        <td>222</td>
                        <td>9%</td>
                    </tr>
                    {/* row 6 */}
                    <tr className="hover">
                        <th>6.</th>
                        <td>30 s/d 35</td>
                        <td>129</td>
                        <td>127</td>
                        <td>256</td>
                        <td>11%</td>
                    </tr>
                    {/* row 7 */}
                    <tr className="hover">
                        <th>7.</th>
                        <td>36 s/d 40</td>
                        <td>118</td>
                        <td>108</td>
                        <td>226</td>
                        <td>9%</td>
                    </tr>
                    {/* row 8 */}
                    <tr className="hover">
                        <th>8.</th>
                        <td>41 s/d 45</td>
                        <td>123</td>
                        <td>121</td>
                        <td>244</td>
                        <td>10%</td>
                    </tr>
                    {/* row 9 */}
                    <tr className="hover">
                        <th>9.</th>
                        <td>46 s/d 50</td>
                        <td>93</td>
                        <td>103</td>
                        <td>196</td>
                        <td>8%</td>
                    </tr>
                    {/* row 10 */}
                    <tr className="hover">
                        <th>10.</th>
                        <td>51 s/d 55</td>
                        <td>93</td>
                        <td>94</td>
                        <td>187</td>
                        <td>8%</td>
                    </tr>
                    {/* row 11 */}
                    <tr className="hover">
                        <th>11.</th>
                        <td>56 s/d 60</td>
                        <td>96</td>
                        <td>87</td>
                        <td>198</td>
                        <td>8%</td>
                    </tr>
                    {/* row 12 */}
                    <tr className="hover">
                        <th>12.</th>
                        <td>61 &gt;</td>
                        <td>84</td>
                        <td>82</td>
                        <td>166</td>
                        <td>7%</td>
                    </tr>
                    {/* row 13 */}
                    <tr className="hover">
                        <th></th>
                        <th>Total</th>
                        <th>1.230</th>
                        <th>1.206</th>
                        <th>2.436</th>
                        <th>100%</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </DataLayout>
    );
};

export default DataUmur;