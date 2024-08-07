import VisiDanMisi from "../components/VisiDanMisi"
import MainLayout from "../layout/MainLayout"
import { ScrollRestoration } from "react-router-dom"

export default function VisiDanMisiPage() {
    return (
        <MainLayout>
            <VisiDanMisi />
            <ScrollRestoration />
        </MainLayout>
    )
}
