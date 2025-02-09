"use client";

import { useRouter } from "next/navigation";
import Footer from "../components/Footer";

const DiseaseDetection = () => {
    const router = useRouter();

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold text-green-900 mb-6">
                    Detect the Diseases: Rice Blast
                </h2> 

                {/* Image */}
                <img src="/images/tea-leave.png" alt="Rice Disease" className="w-80 md:w-96 h-48 md:h-56 bg-cover bg-center rounded-lg shadow-md mb-6" />

                {/* Button */}
                <button
                    onClick={() => router.push("/solutions")}
                    className="bg-green-700 hover:bg-green-800 text-white text-lg font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md"
                >
                    Get The Solutions
                </button>
            </div>
            <Footer />
        </>
    );
};

export default DiseaseDetection;
