import Bpd from "../components/Bpd";
import MainLayout from "../layout/MainLayout";
import { ScrollRestoration } from "react-router-dom";

export default function BpdPage() {
    return (
        <MainLayout>
            <Bpd />
            <ScrollRestoration />
        </MainLayout>
    )
}