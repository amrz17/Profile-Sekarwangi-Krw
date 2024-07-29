import DataLayout from "../layout/DataLayout";

const DataGender = () => {
    return (
        <DataLayout>
            <div className="w-full">
                <h1 className="text-3xl">
                    Data Jenis Kelamin
                </h1>
            </div>
            <div className="overflow-x-auto min-w-[365px]">
                <table className="table">
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
                        <th>1</th>
                        <td>Laki-laki</td>
                        <td>1.230</td>
                        <td>50%</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                        <th>2</th>
                        <td>Perempuan</td>
                        <td>1.206</td>
                        <td>50%</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                        <th></th>
                        <td>TOTAL</td>
                        <td>2.436</td>
                        <td>100%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </DataLayout>

    );
};

export default DataGender;