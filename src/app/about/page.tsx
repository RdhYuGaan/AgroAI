import Footer from "../components/Footer";

const About = () => {
    return (
        <>
            <section className="about-us-section flex items-center justify-center px-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Left Text Content */}
                    <div className="text-content flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">About us</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            AgroAI is at the forefront of agricultural technology, merging artificial intelligence with traditional farming practices. Our team of experts in IoT, AI, and agriculture is dedicated to building smart solutions to improve the productivity and sustainability of your crops. With years of experience in AI and IoT development, our goal is to make farming more efficient, cost-effective, and environmentally sustainable.
                        </p>
                    </div>

                    {/* Right Image Content */}
                    <div
                        className="image-content min-h-[300px] md:min-h-[400px] bg-cover bg-center rounded-lg shadow-lg"
                        style={{ backgroundImage: 'url(/images/robot-vehicle.png)' }}
                    ></div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;