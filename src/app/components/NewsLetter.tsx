const Newsletter = () => {
    return (
        <div className="p-6 bg-green-100 rounded-lg shadow-md max-w-2xl mx-auto">
            {/* Title */}
            <h2 className="text-xl font-bold mb-4">Join Our Newsletter</h2>

            {/* Form */}
            <form className="flex items-center space-x-2">
                {/* Input */}
                <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-50"
                />

                {/* Button */}
                <button
                    type="submit"
                    className="px-6 py-3 bg-green-500 text-white font-medium rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Subscribe
                </button>
            </form>

            {/* Note */}
            <p className="text-sm text-gray-600 mt-3">
                * Will send you weekly updates for your better tool management.
            </p>
        </div>
    );
}

export default Newsletter;
