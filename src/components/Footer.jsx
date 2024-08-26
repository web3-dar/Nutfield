import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">Products</h3>
            <ul>
              <li>
                <a href="/greenery-s" className="hover:underline text-2xl">
                  Nutfield™
                </a>
              </li>
              <li>
                <a href="/farmhand" className="hover:underline">
                  Nutfield® Software
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:underline">
                  Nutfield Supplies
                </a>
              </li>
              <li>
                <a href="/support" className="hover:underline">
                  Nutfield Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Get Started</h3>
            <ul>
              <li>
                <a href="/project-planning-center" className="hover:underline">
                  Nutfield Project Planning
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/financing" className="hover:underline">
                  Financing
                </a>
              </li>
              <li>
                <a href="/education" className="hover:underline">
                  Nutfield
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul>
              <li>
                <a href="/company" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Stay Connected</h3>
            <p>Sign up for our newsletter:</p>
            <form className="mt-4">
              <input
                type="email"
                className="w-full p-2 rounded-md text-gray-800"
                placeholder="Enter your email"
              />
              <button className="mt-2 w-full bg-blue-600 p-2 rounded-md hover:bg-blue-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>
            &copy; {new Date().getFullYear()} Nutfield. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
