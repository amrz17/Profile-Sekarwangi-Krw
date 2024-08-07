import DataAgama from "../components/DataAgama";
import MainLayout from "../layout/MainLayout";
import { ScrollRestoration } from "react-router-dom";

export default function DataAgamaPage() {
    return (
        <MainLayout>
            <DataAgama />
            <ScrollRestoration />
        </MainLayout>
    )
}