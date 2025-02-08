"use client";
import Footer from "../components/Footer";
import { useRouter } from 'next/navigation';

const About = () => {
    const router = useRouter();
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold text-green-900 mb-6">
                    Disease Solutions
                </h2>

                {/* Image */}
                <img
                    src="/images/tea-leave.png"
                    alt="Disease Solutions"
                    className="w-80 md:w-96 h-48 md:h-56 bg-cover bg-center rounded-lg shadow-md mb-6"
                />

                {/* Solutions Table */}
                <div className="overflow-x-auto w-full max-w-4xl">
                    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-green-700 text-white">
                            <tr>
                                <th className="py-3 px-6">Disease</th>
                                <th className="py-3 px-6">Cause</th>
                                <th className="py-3 px-6">Solution</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr className="border-b">
                                <td className="py-3 px-6">Leaf Spot</td>
                                <td className="py-3 px-6">Fungal Infection</td>
                                <td className="py-3 px-6">Use organic fungicides, remove infected leaves</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-3 px-6">Root Rot</td>
                                <td className="py-3 px-6">Overwatering</td>
                                <td className="py-3 px-6">Improve soil drainage, reduce watering</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-6">Powdery Mildew</td>
                                <td className="py-3 px-6">High Humidity</td>
                                <td className="py-3 px-6">Apply neem oil, reduce humidity</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;