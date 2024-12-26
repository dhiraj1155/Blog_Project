import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="relative overflow-hidden py-10 bg-gradient-to-b from-gray-700 via-gray-800 to-black text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -m-6">
          {/* Logo and Copyright Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-4/12">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-6">
                <Logo width="120px" />
              </div>
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} DevUI. All rights reserved.
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div>
              <h3 className="mb-6 text-xs font-semibold uppercase text-gray-300 tracking-wide">
                Company
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-base font-medium text-gray-400 hover:text-white transition duration-200"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-400 hover:text-white transition duration-200"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-400 hover:text-white transition duration-200"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-400 hover:text-white transition duration-200"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div>
              <h3 className="mb-6 text-xs font-semibold uppercase text-gray-300 tracking-wide">
                Support
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-base font-medium text-gray-400 hover:text-white transition duration-200"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-400 hover:text-white transition duration-200"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-400 hover:text-white transition duration-200"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-400 hover:text-white transition duration-200"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div>
              <h3 className="mb-6 text-xs font-semibold uppercase text-gray-300 tracking-wide">
                Legals
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-base font-medium text-gray-400 hover:text-white transition duration-200"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-400 hover:text-white transition duration-200"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-400 hover:text-white transition duration-200"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
