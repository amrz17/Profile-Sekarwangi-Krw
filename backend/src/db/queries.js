import { pool } from "./index.js"

// QUERY GET data tbl_m_profil_desa
export const getProfil = async () => {
    const QUERY = "SELECT * FROM tbl_m_profil_desa";

    try {
        const connect = await pool.getConnection();
        const result = await connect.query(QUERY);
        return result[0];
    } catch (error) {
        console.log("Error occured while query get profil desa", error);
        throw error;
    }
};

// QUERY GET data tbl_m_artikel_desa
export const getArtikel = async () => {
    const QUERY = "SELECT * FROM tbl_m_artikel_desa";

    try {
       const connect = await pool.getConnection();
       const result = await connect.query(QUERY);
       return result[0]; 
    } catch (error) {
        console.log("Error occured while query get artikel desa", error);
        throw error
    }
};

// QUERY GET data tbl_m_galeri_desa
export const getGaleri = async () => {
    const QUERY = "SELECT * FROM tbl_m_galeri_desa";

    try {
       const connect = await pool.getConnection();
       const result = await connect.query(QUERY);
       return result[0]; 
    } catch (error) {
       console.log("Error occured while query get galeri desa"); 
       throw error;
    }
};

// QUERY GET data tbl_m_perangkat_desa
export const getPerangkat = async () => {
    const QUERY = "SELECT * FROM tbl_m_perangkat_desa";

    try {
        const connect = await pool.getConnection();
        const result = await connect.query(QUERY);
        return result[0];
    } catch (error) {
        console.log("Error occured while query get perangkat desa");
        throw error;
    }
};

// QUERY GET data tbl_m_program_desa
export const getProgram = async () => {
    const QUERY = "SELECT * FROM tbl_m_program_desa";

    try {
        const connect = await pool.getConnection();
        const result = await connect.query(QUERY);
        return result[0];
    } catch (error) {
        console.log("Error occured while query get program desa");
        throw error;
    }
};

// QUERY GET data tbl_m_potensi_desa
export const getPotensi = async () => {
    const QUERY = "SELECT * FROM tbl_m_potensi_desa";

    try {
        const connect = await pool.getConnection();
        const result = await connect.query(QUERY);
        return result[0];
    } catch (error) {
        console.log("Error occured while query get potensi desa");
        throw error;
    }
};