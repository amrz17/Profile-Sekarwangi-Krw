import DataLayout from "../layout/DataLayout";

const DataPendidikan = () => {
    return (
        <DataLayout>
            <div className="w-full">
                <h1 className="text-3xl">
                    Data Pendidikan
                </h1>
            </div>
            <div className="overflow-x-auto min-w-[365px]">
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
                        <th>1</th>
                        <td>Tidak / Belum Sekolah</td>
                        <td>254</td>
                        <td>10%</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                        <th>2</th>
                        <td>Belum Tamat SD / Sederajat</td>
                        <td>304</td>
                        <td>12%</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                        <th>3</th>
                        <td>Tamat SD / Sederajat</td>
                        <td>1.600</td>
                        <td>66%</td>
                    </tr>
                    {/* row 4 */}
                    <tr className="hover">
                        <th>4</th>
                        <td>SLTP / Sederajat</td>
                        <td>176</td>
                        <td>7%</td>
                    </tr>
                    {/* row 5 */}
                    <tr className="hover">
                        <th>5</th>
                        <td>SLTA / Sederajat</td>
                        <td>85</td>
                        <td>3%</td>
                    </tr>
                    {/* row 6 */}
                    <tr className="hover">
                        <th>6</th>
                        <td>D-1 / D-2</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                    {/* row 7 */}
                    <tr className="hover">
                        <th>7</th>
                        <td>Akademi / D-3 / S.Muda</td>
                        <td>1</td>
                        <td>0%</td>
                    </tr>
                    {/* row 8 */}
                    <tr className="hover">
                        <th>8</th>
                        <td>D-4 / S-1</td>
                        <td>14</td>
                        <td>1%</td>
                    </tr>
                    {/* row 9 */}
                    <tr className="hover">
                        <th>9</th>
                        <td>S2</td>
                        <td>1</td>
                        <td>0%</td>
                    </tr>
                    {/* row 10 */}
                    <tr className="hover">
                        <th>10</th>
                        <td>S3</td>
                        <td>0</td>
                        <td>0%</td>
                    </tr>
                    {/* row 11 */}
                    <tr className="hover">
                        <th></th>
                        <th>Jumlah</th>
                        <th>2.436</th>
                        <th>100%</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </DataLayout>
    );
};

export default DataPendidikan;