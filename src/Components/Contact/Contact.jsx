const Contact = () => {
    return (
        <>
            <div className="min-h-screen bg-cover flex justify-center bg-gray-200  gap-10 justify-items-center items-center p-8 " >
                <div className="max-w-3xl mx-auto px-4 py-8 ">
                    <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
                    <div className="bg-white mb-8 bg-gradient-to-r p-8">
                        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                        <p className="text-gray-700 mb-4">Have questions, suggestions, or feedback? We'd love to hear from you!</p>
                        <form className="">
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
                    <div className="text-gray-700 mb-8">
                        <h2 className="text-xl font-semibold mb-4">Our Location</h2>
                        <iframe
                            title="Company Location"
                            className="w-full h-64 rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.937614741275!2d-75.16568078543816!3d39.952583870388426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c6354986ca49%3A0x5cbbd473bf4e0222!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1620214120809!5m2!1sen!2sus"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="text-gray-700">
                        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                        <p className="mb-2">Address: 123 Main Street, City, Country</p>
                        <p className="mb-2">Email: contact@example.com</p>
                        <p className="mb-2">Phone: +1234567890</p>
                        <h2 className="text-xl font-semibold mb-4 mt-8">Office Hours</h2>
                        <p className="mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="mb-2">Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="mb-2">Sunday: Closed</p>
                        <h2 className="text-xl font-semibold mb-4 mt-8">Connect With Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
                            <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
                            <a href="#" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
                            <a href="#" className="text-blue-500 hover:text-blue-700">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
