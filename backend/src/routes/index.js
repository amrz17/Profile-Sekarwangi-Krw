import { Router} from 'express';
import { getProfilDesa } from '../handlers/index.js';

const appRouter = Router();

// route for get tbl_m_profil_desa
appRouter.get('/profil', getProfilDesa);

export default appRouter;