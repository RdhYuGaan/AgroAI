const NavBar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* menu items */}
                    <div className="flex space-x-6">
                        <a
                            href="#"
                            className="text-gray-900 hover:text-green-600 font-medium"
                        >
                            HOME
                        </a>
                        <a
                            href="#"
                            className="text-gray-900 hover:text-green-600 font-medium"
                        >
                            OUR PRODUCTS
                        </a>
                        <a
                            href="#"
                            className="text-gray-900 hover:text-green-600 font-medium"
                        >
                            CONTACT US
                        </a>
                    </div>

                    {/* user icons */}
                    <div className="flex space-x-4">
                        <button
                            className="text-gray-900 hover:text-green-600"
                            aria-label="User Profile"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM6.75 20.25a7.5 7.5 0 0114.25 0"
                                />
                            </svg>
                        </button>
                        <button
                            className="text-gray-900 hover:text-green-600"
                            aria-label="Notifications"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.25 17.25h-4.5m6.75 0c1.125 0 2.25-.878 2.25-2.625V9.75a6.75 6.75 0 10-13.5 0v4.875c0 1.747 1.125 2.625 2.25 2.625m9 0v.375a2.25 2.25 0 11-4.5 0v-.375m-4.5 0v.375a2.25 2.25 0 104.5 0v-.375"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;