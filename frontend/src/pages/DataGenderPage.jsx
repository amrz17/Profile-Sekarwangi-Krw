import DataGender from "../components/DataGender";
import MainLayout from "../layout/MainLayout";
import { ScrollRestoration } from "react-router-dom";

export default function DataGenderPage() {
    return (
        <MainLayout>
            <DataGender />
            <ScrollRestoration />
        </MainLayout>
    )
}