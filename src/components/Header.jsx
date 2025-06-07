import React from 'react';

// Header Component
const Header = () => {
  return (
    <header className="flex justify-end items-center p-4 text-sm">
      <nav className="flex items-center space-x-4">
        <a href="#" className="text-gray-700 hover:underline transition-colors duration-200">
          Gmail
        </a>
        <a href="#" className="text-gray-700 hover:underline transition-colors duration-200">
          Images
        </a>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-200 font-medium">
          Sign in
        </button>
      </nav>
    </header>
  );
};

export default Header;
