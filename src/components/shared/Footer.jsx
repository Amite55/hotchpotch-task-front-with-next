import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Works
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Career
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Help */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Help</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Customer Support
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Delivery Details
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Free eBooks
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Development Tutorial
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                How to - Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Youtube Playlist
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Free eBooks
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Development Tutorial
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                How to - Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Youtube Playlist
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;