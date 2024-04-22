const Services = () => {
    return (
        <div className="min-h-screen bg-cover flex justify-center bg-gray-200  gap-10 justify-items-center items-center p-8 " >
            <div className="max-w-3xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-purple-300 to-purple-500 shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">User Management</h2>
                        <p className="text-gray-100">Manage user accounts, permissions, and authentication for your website.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-300 to-blue-500 shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">Content Management</h2>
                        <p className="text-gray-100">Create, edit, and manage content for your website, including articles, blog posts, and images.</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-300 to-green-500 shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">Data Analytics</h2>
                        <p className="text-gray-100">Analyze user behavior, traffic patterns, and website performance with powerful analytics tools.</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">E-commerce Solutions</h2>
                        <p className="text-gray-100">Set up an online store, manage inventory, process payments, and track sales with our e-commerce platform.</p>
                    </div>
                    <div className="bg-gradient-to-r from-red-300 to-red-500 shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">SEO Optimization</h2>
                        <p className="text-gray-100">Improve your website's visibility in search engine results and attract more organic traffic.</p>
                    </div>
                    <div className="bg-gradient-to-r from-indigo-300 to-indigo-500 shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-white mb-4">Mobile App Development</h2>
                        <p className="text-gray-100">Create custom mobile applications tailored to your business needs and target audience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
