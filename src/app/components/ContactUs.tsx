import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faEnvelope,
    faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-8 p-8 bg-gray-100 rounded-lg shadow-lg">
            {/* Left Side - Contact Information */}
            <div className="lg:w-2/5 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-gray-600 mb-6">Say something! Start a live chat!</p>
                <ul className="space-y-4">
                    <li className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faPhone} style={{ width: "20px", marginRight: "10px" }} />
                        <span>+94 760701732</span>
                    </li>
                    <li className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faEnvelope} style={{ width: "20px", marginRight: "10px" }} />
                        <span>agroai@gmail.com</span>
                    </li>
                    <li className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faMapMarker} style={{ width: "20px", marginRight: "10px" }} />
                        <span>132 Dartmouth Street Boston, Massachusetts 02116, United States</span>
                    </li>
                </ul>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:w-3/5 bg-white p-6 rounded-lg shadow-md">
                <form className="space-y-6">
                    {/* Name Fields */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="John"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    {/* Email and Phone Fields */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="example@email.com"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="+123 456 789"
                            />
                        </div>
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Select Subject?</label>
                        <div className="flex space-x-4 mt-1">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="subject" className="h-4 w-4 text-indigo-600 border-gray-300" />
                                <span>General Inquiry</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="subject" className="h-4 w-4 text-indigo-600 border-gray-300" />
                                <span>Support</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="subject" className="h-4 w-4 text-indigo-600 border-gray-300" />
                                <span>Feedback</span>
                            </label>
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Write your message..."
                            rows={4}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-medium text-sm rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;