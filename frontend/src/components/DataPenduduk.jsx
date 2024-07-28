import DataLayout from "../layout/DataLayout";

const DataPenduduk = () => {
    return (
        <DataLayout>
            <div className="w-full">
                <h1 className="text-3xl">
                    Data Penduduk
                </h1>
            </div>
            <div className="overflow-x-auto w-[350px]">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Dusun</th>
                        <th>RW</th>
                        <th>RT</th>
                        <th>Nama Ketua</th>
                        <th>KK</th>
                        <th>L</th>
                        <th>P</th>
                        <th>Total Warga</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr className="hover">
                        <th>1</th>
                        <td>Cilele</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                        <th>2</th>
                        <td>Krajan</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                        <th>3</th>
                        <td>Patengong</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </DataLayout>
    )
}

export default DataPenduduk;