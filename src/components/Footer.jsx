import React from 'react';
import { Heart, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-morphism mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-gray-300">Made with</span>
            <Heart className="h-5 w-5 text-red-500 animate-pulse" />
            <span className="text-gray-300">by</span>
            <span className="text-white font-semibold">CodeByAshuu</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/CodeByAshuu/DMMV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sagarrrr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2025 Dynamic Memory Management Visualizer. All rights reserved.</p>
            <p className="mt-1">Educational project for understanding memory management algorithms</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;