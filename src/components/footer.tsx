import React from "react";

function Footer() {
    return (
        <footer className="px-4 md:px-36 dark:bg-gray-900 text-gray-700 bg-zinc-200/30 backdrop-blur-sm py-10 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo + Description */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Company Name Finder
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed">
                        Assists entrepreneurs in selecting unique company names that are domain-available and MCA-compliant for legal incorporation in India.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-md font-semibold mb-2">Quick Links</h4>
                    <ul className="space-y-1 text-sm">
                        <li>
                            <a href="#" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Check Name</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">How It Works</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Use Case Highlights */}
                <div>
                    <h4 className="text-md font-semibold mb-2">For</h4>
                    <ul className="space-y-1 text-sm">
                        <li>✅ Startup Founders</li>
                        <li>✅ Branding Agencies</li>
                        <li>✅ Incorporation Consultants</li>
                        <li>✅ Legal & Compliance Teams</li>
                    </ul>
                </div>
            </div>

            {/* Bottom note */}
            <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-500">
                © {new Date().getFullYear()} Company Name Finder. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
