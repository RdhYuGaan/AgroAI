import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'

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
                    <div className="flex space-x-10">
                        <button className="text-gray-900 hover:text-green-600" aria-label="User Profile">
                            <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
                        </button>
                        <button className="text-gray-900 hover:text-green-600" aria-label="User Profile">
                            <FontAwesomeIcon icon={faBell} className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;