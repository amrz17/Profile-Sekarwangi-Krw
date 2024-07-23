import { 
    getProfil,
    getArtikel,
    getGaleri,
    getPerangkat,
    getProgram, 
    getPotensi
      } from "../db/queries.js"

//Function for tbl_m_profil_desa
export const getProfilDesa = async(req, res) => {
    try {
        const profil = await getProfil();
        return res.status(200).json({ profil });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message : "Error occured when try get profil desa"});
    }
};

//Function for tbl_m_artikel_desa
export const getArtikelDesa = async(req, res) => {
    try {
        const artikel = await getArtikel();
        return res.status(200).json({ artikel });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message : "Error occured when try ger artikel desa"});
    }
};

//Function for tbl_m_galeri_desa
export const getGaleriDesa = async(req, res) => {
    try {
       const galeri = await getGaleri();
       return res.status(200).json({ galeri }); 
    } catch (error) {
       console.log(error); 
       return res.status(500).json({ message : "Error occured when try get galeri desa"})
    }
};

//Function for tbl_m_perangkat_desa
export const getPerangkatDesa = async(req, res) => {
    try {
       const perangkatDesa = await getPerangkat(); 
       return res.status(200).json({ perangkatDesa });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error occured when try get perangkat desa"});
    }
};

//Function for tbl_m_program_desa
export const getProgramDesa = async(req, res) => {
    try {
        const program = await getProgram();
        return res.status(200).json({ program });
    } catch (error) {
       console.log(error); 
       return res.status(500).json({ message: "Error occured when try get program desa"});
    }
};

//Function for tbl_m_potensi_desa
export const getPotensiDesa = async(req, res) => {
    try {
        const potensi = await getPotensi();
        return res.status(200).json({ potensi });
    } catch (error) {
       console.log(error); 
       return res.status(500).json({ message: "Error occured when try get potensi desa" });
    }
};