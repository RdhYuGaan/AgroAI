'use client'
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import { useLoading } from "./context/loadingContext";

export default function Home() {
  const { startLoading, stopLoading } = useLoading();


  return (
    <div>

      <HeroSection />
    </div>
  );
}
