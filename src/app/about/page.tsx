import Footer from "../components/Footer";

const About = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold text-green-900 mb-6">
                    Detect the Diseases: lorem_ipsum
                </h2>

                {/* Image */}
                <div
                    className="w-80 md:w-96 h-48 md:h-56 bg-cover bg-center rounded-lg shadow-md mb-6"
                    style={{ backgroundImage: "url(/image.png)" }}
                ></div>

                {/* Button */}
                <button
                    className="bg-green-700 hover:bg-green-800 text-white text-lg font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md"
                >
                    Get The Solutions
                </button>
            </div>
            <Footer />
        </>
    );
};

export default About;