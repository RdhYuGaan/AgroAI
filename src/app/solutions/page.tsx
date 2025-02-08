"use client";

import Link from "next/link";

const Solutions = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
                <h2 className="text-3xl font-semibold text-green-900 mb-6">Disease Solutions</h2>

                <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-3xl">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-green-700 text-white">
                                <th className="py-3 px-4 text-left">Disease</th>
                                <th className="py-3 px-4 text-left">Cause</th>
                                <th className="py-3 px-4 text-left">Solution</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-3 px-4">Rice Blast</td>
                                <td className="py-3 px-4">Fungal Infection (Magnaporthe oryzae)</td>
                                <td className="py-3 px-4">Use resistant varieties & fungicides</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-3 px-4">Bacterial Blight</td>
                                <td className="py-3 px-4">Xanthomonas oryzae bacteria</td>
                                <td className="py-3 px-4">Apply copper-based bactericides</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4">Sheath Blight</td>
                                <td className="py-3 px-4">Rhizoctonia solani fungus</td>
                                <td className="py-3 px-4">Improve field drainage & fungicide use</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Back Button */}
                <Link href="/" className="mt-6 text-green-700 hover:text-green-800 font-medium">
                    ⬅ Back to Home
                </Link>
            </div>
            <Footer />
        </>
    );
};

export default Solutions;
