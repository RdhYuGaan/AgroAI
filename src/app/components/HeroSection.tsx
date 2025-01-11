const HeroSection = () => {
    return <div>

        <section className="bg-gray-200 bg-opacity-30 py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">

                    <div>
                        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" />
                    </div>
                    <div>
                        <p className="text-base font-semibold tracking-wider text-green-600 uppercase">AI-Powered Crop Solutions</p>
                        <h1 className="mt-4 text-2xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-4xl">Revolutionizing Agriculture with AI-Powered Crop Solutions</h1>
                        <p className="mt-4 text-lg text-black lg:mt-8 sm:text-xl">At AgroAI, we aim to empower farmers by providing innovative AI-based solutions that detect crop diseases, optimize water usage, and ensure ideal pH levels for superior crop growth. With our advanced device, we help you monitor your fields and take proactive measures to ensure the health of your crops and improve yield.</p>

                        <div className="grid  grid-cols-2  lg:grid-cols-3  gap-2 ">
                            <a href="/register" title="" className="flex justify-center items-center px-6 py-4 mt-8 font-semibold text-gray-50 transition-all duration-200 bg-green-500 rounded-full lg:mt-16 hover:bg-green-700 focus:bg-green-400" role="button">
                                Join Us
                                <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                            <a href="#" title="" className=" text-center  items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 border border-green-500 rounded-full lg:mt-16 hover:bg-green-700 focus:bg-green-400" role="button">
                                Donate Us

                            </a>
                        </div>


                    </div>


                </div>
            </div>
        </section>
    </div>;
};
export default HeroSection;