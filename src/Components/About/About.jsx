

const About = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit malesuada fermentum.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
                <p className="text-gray-700">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-2">Our Team</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>John Doe - CEO</li>
                    <li>Jane Smith - CTO</li>
                    <li>Michael Johnson - CFO</li>
                </ul>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Learn More</button>
            </div>
        </div>
    );
};

export default About;
