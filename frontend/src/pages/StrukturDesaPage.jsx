import StrukturDesa from "../components/StrukturDesa";
import MainLayout from "../layout/MainLayout";
import { ScrollRestoration } from "react-router-dom";

export default function StrukturDesaPage() {
    return (
        <MainLayout>
            <StrukturDesa />
            <ScrollRestoration />
        </MainLayout>
    )
}