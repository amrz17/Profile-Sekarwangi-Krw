import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
import BeritaPage from './pages/BeritaPage.jsx'
import ProfilPage from './pages/ProfilPage.jsx'
import SejarahPage from './pages/SejarahPage.jsx'
import IsiBerita from './components/IsiBerita.jsx'
import DataPendudukPage from './pages/DataPendudukPage.jsx'
import DataPendidikanPage from './pages/DataPendidikanPage.jsx'
import DataAgamaPage from './pages/DataAgamaPage.jsx'
import DataGenderPage from './pages/DataGenderPage.jsx'
import DataUmurPage from './pages/DataUmurPage.jsx'
import DataPekerjaanPage from './pages/DataPekerjaanPage.jsx'
import VisiDanMisiPage from './pages/VisiDanMisiPage.jsx'
import StrukturDesaPage from './pages/StrukturDesaPage.jsx'
import BpdPage from './pages/BpdPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  // Profil Desa
  {
    path: "/profil/wilayah-desa",
    element: <ProfilPage />
  },
  {
    path: "/profil/sejarah-desa",
    element: <SejarahPage />
  },
  {
    path: "/profil/visidanmisi-desa",
    element: <VisiDanMisiPage />
  },
  // Berita Desa
  {
    path: "/berita-desa",
    element: <BeritaPage />
  },
  {
    path: "/berita-desa/1",
    element: <IsiBerita />
  },
  // Pemerintahan
  {
    path: "/pemerintahan/sotk",
    element: <StrukturDesaPage />
  },
  {
    path: "/pemerintahan/bpd",
    element: <BpdPage />
  },
  // Data Desa
  {
    path: "/data/data-penduduk",
    element: <DataPendudukPage />
  },
  {
    path: "/data/data-agama",
    element: <DataAgamaPage />
  },
  {
    path: "/data/data-gender",
    element: <DataGenderPage />
  },
  {
    path: "/data/data-umur",
    element: <DataUmurPage />
  },
  {
    path: "/data/data-pendidikan",
    element: <DataPendidikanPage />
  },
  {
    path: "/data/data-pekerjaan",
    element: <DataPekerjaanPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
