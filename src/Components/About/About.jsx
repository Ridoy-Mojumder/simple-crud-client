const About = () => {
    return (
        <div className="min-h-screen bg-cover flex justify-center bg-gray-200  gap-10 justify-items-center items-center p-8 " >
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-purple-300 to-purple-500 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Our Mission</h2>
                    <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit malesuada fermentum.</p>
                </div>
                <div className="bg-gradient-to-r from-blue-300 to-blue-500 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Our Vision</h2>
                    <p className="text-gray-100">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </div>
                <div className="bg-gradient-to-r from-green-300 to-green-500 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Our Team</h2>
                    <ul className="list-disc list-inside text-gray-100">
                        <li>John Doe - CEO</li>
                        <li>Jane Smith - CTO</li>
                        <li>Michael Johnson - CFO</li>
                    </ul>
                </div>
                <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Our Values</h2>
                    <ul className="list-disc list-inside text-gray-100">
                        <li>Customer satisfaction</li>
                        <li>Innovation</li>
                        <li>Integrity</li>
                        <li>Teamwork</li>
                    </ul>
                </div>
                <div className="bg-gradient-to-r from-red-300 to-red-500 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Our Achievements</h2>
                    <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit malesuada fermentum.</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-300 to-indigo-500 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Our Partners</h2>
                    <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit malesuada fermentum.</p>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Learn More</button>
            </div>
        </div>
        </div>
    );
};

export default About;
