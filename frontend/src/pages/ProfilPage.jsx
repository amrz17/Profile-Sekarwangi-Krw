import Profil from "../components/Profil";
import MainLayout from "../layout/MainLayout";
import { ScrollRestoration } from "react-router-dom";

export default function ProfilPage() {
    return (
        <MainLayout>
            <Profil />
            <ScrollRestoration />
        </MainLayout>
    )
}

