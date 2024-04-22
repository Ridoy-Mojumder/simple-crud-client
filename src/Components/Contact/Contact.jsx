

const Contact = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-gray-700 mb-4">Have questions, suggestions, or feedback? We'd love to hear from you!</p>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send Message</button>
                    </div>
                </form>
            </div>
            <div className="text-center text-gray-700">
                <p>123 Main Street, City, Country</p>
                <p>Email: contact@example.com</p>
                <p>Phone: +1234567890</p>
            </div>
        </div>
    );
};

export default Contact;
