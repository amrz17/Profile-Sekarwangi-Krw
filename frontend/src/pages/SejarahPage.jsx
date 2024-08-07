import SejarahDesa from "../components/SejarahDesa";
import MainLayout from "../layout/MainLayout";
import { ScrollRestoration } from "react-router-dom";

export default function SejarahPage()  {
    return (
        <MainLayout>
            <SejarahDesa />
            <ScrollRestoration />
        </MainLayout>
    );
}