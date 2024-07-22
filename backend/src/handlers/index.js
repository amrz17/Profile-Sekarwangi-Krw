import { getProfil } from "../db/queries.js"

//Function for tbl_m_profil_desa
export const getProfilDesa = async(req, res) => {
    try {
        const profil = await getProfil();
        return res.status(200).json({ profil });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message : "Error occured when try get profil desa"})
    }
}

