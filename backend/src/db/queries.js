import { pool } from "./index.js"

// QUERY GET data tbl_m_profil_desa
export const getProfil = async () => {
    const QUERY = "SELECT * FROM tbl_m_profil_desa";

    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY);
        return result[0];
    } catch (error) {
        console.log("Error occured while get profil desa");
        throw err;
    }
}
