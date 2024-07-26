import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
import BeritaPage from './pages/BeritaPage.jsx'
import ProfilPage from './pages/ProfilPage.jsx'
import SejarahPage from './pages/SejarahPage.jsx'
import DataPage from './pages/DataPage.jsx'
import IsiBerita from './components/IsiBerita.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/berita-desa",
    element: <BeritaPage />
  },
  {
    path: "/berita-desa/1",
    element: <IsiBerita />
  },
  {
    path: "/profil/wilayah-desa",
    element: <ProfilPage />
  },
  {
    path: "/profil/sejarah-desa",
    element: <SejarahPage />
  },
  {
    path: "/data-desa",
    element: <DataPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
