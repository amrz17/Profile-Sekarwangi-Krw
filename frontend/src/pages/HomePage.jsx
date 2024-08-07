import Hero from "../components/Hero";
import MainLayout from "../layout/MainLayout";
import { ScrollRestoration } from "react-router-dom";

export default function HomePage() {
  return (
    <MainLayout>
          <Hero />
          <ScrollRestoration />
    </MainLayout>

  )
}