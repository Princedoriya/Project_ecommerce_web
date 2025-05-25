import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 leading-relaxed">
              We are a leading e-commerce platform providing the best products with top-notch customer service. Our mission is to deliver quality and satisfaction.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/product-category" className="hover:text-white transition-colors">Products</a></li>
              <li><a className="hover:text-white transition-colors">About Us</a></li>
              <li><a className="hover:text-white transition-colors">Contact</a></li>
              <li><a className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400">123 shyam nagar,</p>
            <p className="text-gray-400">Jaipur, Rajasthan, 302029</p>
            <p className="text-gray-400">Email: princelectronics@gmail.com</p>
            <p className="text-gray-400">Phone: +91 123-100-4567</p>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter to get the latest updates and offers.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Prince's electronics E-commerce Platform. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
