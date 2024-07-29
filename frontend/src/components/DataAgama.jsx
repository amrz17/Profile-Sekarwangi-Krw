import DataLayout from "../layout/DataLayout";

const DataAgama = () => {
    return (
        <DataLayout>
            <div className="w-full">
                <h1 className="text-3xl">
                    Data Agama
                </h1>
            </div>
            <div className="overflow-x-auto min-w-[365px]">
                <table className="table">
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
                        <th>1</th>
                        <td>Islam</td>
                        <td>2.434</td>
                        <td>100%</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                        <th>2</th>
                        <td>Khatolik</td>
                        <td>0</td>
                        <td>0%</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                        <th>3</th>
                        <td>Kristen</td>
                        <td>2</td>
                        <td>0%</td>
                    </tr>
                    {/* row 4 */}
                    <tr className="hover">
                        <th>4</th>
                        <td>Hindu</td>
                        <td>0</td>
                        <td>0%</td>
                    </tr>
                    {/* row 5 */}
                    <tr className="hover">
                        <th>5</th>
                        <td>Buddha</td>
                        <td>0</td>
                        <td>0%</td>
                    </tr>
                    {/* row 6 */}
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

export default DataAgama;