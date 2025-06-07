import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="px-8 py-3 text-sm text-gray-600">
        India
      </div>
      <div className="border-t border-gray-300 px-8 py-3 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 space-y-4 md:space-y-0">
        <div className="flex flex-wrap justify-center md:justify-start space-x-6">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Advertising</a>
          <a href="#" className="hover:underline">Business</a>
          <a href="#" className="hover:underline">How Search works</a>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end space-x-6">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Settings</a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
