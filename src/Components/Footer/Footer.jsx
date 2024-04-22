

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-8 md:mb-0">
                            <h2 className="text-xl font-semibold text-white mb-2">Stay Connected</h2>
                            <p className="text-gray-300">Follow us on social media for updates and news about our app.</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12 1.75a10.25 10.25 0 0 0-2.887 20.036v-7.2H7.25v7.2A10.25 10.25 0 0 0 12 1.75zM8.25 11.75V7.25h3.5v4.5h-3.5zM17.387 7.25h-1.98v-1.5c0-.537.434-.97.97-.97h1.01c.536 0 .97.433.97.97v1.5h-1.97v1.71h1.97v5.038h-2.88v1.75h2.88c.544 0 .988-.444.988-.988V7.937a.98.98 0 0 0-.988-.687z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1.75A10.25 10.25 0 1 0 22.25 12 10.261 10.261 0 0 0 12 1.75zm3.646 15.475h-1.46v-4.636c0-1.163-.832-2.145-2.016-2.145-1.223 0-2.075 1.004-2.075 2.166v4.615h-1.46v-7.21h1.46v1.142c.567-.861 1.36-1.439 2.604-1.439 2.027 0 3.598 1.363 3.598 4.27v3.037z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1.75A10.25 10.25 0 1 0 22.25 12 10.261 10.261 0 0 0 12 1.75zm4.875 9.796c-.007-.162-.034-.349-.074-.54-.263-1.629-1.326-2.894-2.615-3.11-1.514-.268-3.59.942-4.996.942-1.407 0-2.47-1.21-3.984-.942-1.29.216-2.352 1.481-2.615 3.11-.04.191-.067.378-.074.54C3.327 12.64 3 13.815 3 15.043c0 2.843 2.316 5.159 5.159 5.159h7.682C18.684 20.202 21 17.886 21 15.043c0-1.228-.327-2.403-.125-3.497zm-4.583 3.885c-1.671 0-3.025-1.354-3.025-3.025 0-1.67 1.354-3.024 3.025-3.024s3.025 1.353 3.025 3.024c0 1.67-1.354 3.025-3.025 3.025zm4.929-8.12c-.565 0-1.023.458-1.023 1.023 0 .565.458 1.023 1.023 1.023.564 0 1.023-.458 1.023-1.023s-.459-1.023-1.023-1.023z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-center text-gray-300 text-sm">&copy; {new Date().getFullYear()} My Awesome App. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;