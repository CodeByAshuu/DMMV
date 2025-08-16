import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MemoryStick as Memory } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="glass-morphism sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-white hover:text-primary-300 transition-colors">
              <Memory className="h-8 w-8 text-primary-400" />
              <span className="font-bold text-xl">DMMV</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive('/') 
                    ? 'bg-primary-600 text-white' 
                    : 'text-gray-300 hover:bg-primary-500/20 hover:text-white'
                }`}
              >
                Home
              </Link>
              {/* <Link
                to="/visualizer"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive('/visualizer') 
                    ? 'bg-primary-600 text-white' 
                    : 'text-gray-300 hover:bg-primary-500/20 hover:text-white'
                }`}
              >
                Visualizer
              </Link> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/50 rounded-lg mt-2">
              <Link
                to="/"
                onClick={toggleMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive('/') 
                    ? 'bg-primary-600 text-white' 
                    : 'text-gray-300 hover:bg-primary-500/20 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link
                to="/visualizer"
                onClick={toggleMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive('/visualizer') 
                    ? 'bg-primary-600 text-white' 
                    : 'text-gray-300 hover:bg-primary-500/20 hover:text-white'
                }`}
              >
                Visualizer
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;