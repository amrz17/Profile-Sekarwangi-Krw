import DataUmur from "../components/DataUmur";
import MainLayout from "../layout/MainLayout";
import { ScrollRestoration } from "react-router-dom";

export default function DataUmurPage() {
    return (
        <MainLayout>
            <DataUmur />
            <ScrollRestoration />
        </MainLayout>

    )
}