import { Router} from 'express';
import { 
    getProfilDesa,
    getArtikelDesa,
    getGaleriDesa,
    getPerangkatDesa,
    getProgramDesa,
    getPotensiDesa
     } from '../handlers/index.js';

const appRouter = Router();

// route for get tbl_m_profil_desa
appRouter.get('/profil', getProfilDesa);

// route for get tbl_m_artikel_desa
appRouter.get('/artikel', getArtikelDesa);

// route for get tbl_m_galeri_desa
appRouter.get('/galeri', getGaleriDesa);

// route for get tbl_m_perangkat_desa
appRouter.get('/perangkat-desa', getPerangkatDesa);

// route for get tbl_m_program_desa
appRouter.get('/program', getProgramDesa);

// route for get tbl_m_potensi_desa
appRouter.get('/potensi', getPotensiDesa)

export default appRouter;