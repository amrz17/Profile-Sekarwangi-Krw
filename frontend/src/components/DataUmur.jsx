import DataLayout from "../layout/DataLayout"
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { dataUmur, COLORS } from "../const";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DataUmur = () => {
    return (
        <DataLayout>
            <div className="w-full">
                <h1 className="font-inter text-3xl font-bold text-center
                    text-gray-500">
                    DATA RENTANG UMUR
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
                            outerRadius={130}
                            fill="#8884d8"
                            label={renderCustomizedLabel}
                        >
                            {dataUmur.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                </PieChart>
            </div>
            <div>
                <p className="font-inter text-justify">
                    Data demografi berdasarkan rentang umur memberikan gambaran penting tentang 
                    komposisi populasi suatu wilayah. Umumnya, rentang umur dibagi menjadi beberapa 
                    kategori utama: anak-anak (0-14 tahun), remaja (15-24 tahun), dewasa muda (25-44 tahun), 
                    dewasa paruh baya (45-64 tahun), dan lansia (65 tahun ke atas). Distribusi penduduk 
                    di berbagai kelompok umur ini dapat mempengaruhi berbagai aspek sosial, ekonomi, dan kebijakan publik.
                    Misalnya, wilayah dengan proporsi anak-anak dan remaja yang tinggi mungkin perlu fokus pada
                    pengembangan sistem pendidikan dan lapangan kerja, sementara daerah dengan populasi lansia
                    yang besar memerlukan perencanaan layanan kesehatan dan sistem pensiun yang memadai. 
                    Analisis tren demografi berdasarkan umur juga dapat membantu dalam memproyeksikan kebutuhan
                    masa depan dan merancang kebijakan yang tepat sasaran untuk setiap kelompok usia.
                </p>
            </div>
            <h2 className="text-center font-inter text-gray-500 font-bold my-2
            md:text-xl">
                    JUMLAH PENDUDUK BERDASARKAN STRUKTUR USIA
            </h2>
            <div className="overflow-x-auto w-full mx-auto">
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
            <p className="text-xs">
                Sumber : Data BPS tahun 2023
            </p>
        </DataLayout>
    );
};

export default DataUmur;