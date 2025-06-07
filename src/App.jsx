import React, { useState, useRef, useEffect } from 'react';

const GoogleHomepage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showVoiceAnimation, setShowVoiceAnimation] = useState(false);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const searchInputRef = useRef(null);

  // Sample search suggestions for demonstration
  const searchSuggestions = [
    'react js tutorial',
    'react hooks examples',
    'react best practices',
    'react performance optimization'
  ];

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      // In a real implementation, this would redirect to Google search
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const handleVoiceSearch = () => {
    setShowVoiceAnimation(true);
    setTimeout(() => {
      setShowVoiceAnimation(false);
      setSearchQuery('Hello, how are you?');
    }, 2000);
  };

  const handleInputFocus = () => {
    setShowSearchSuggestions(true);
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow clicking on them
    setTimeout(() => setShowSearchSuggestions(false), 200);
  };

  const selectSuggestion = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSearchSuggestions(false);
    searchInputRef.current?.focus();
  };

  useEffect(() => {
    // Focus search input on page load
    searchInputRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 -mt-20">
        {/* Google Logo */}
        <div className="mb-8">
          <svg width="272" height="92" viewBox="0 0 272 92" className="max-w-full h-auto">
            <g fill="none" fillRule="evenodd">
              <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
              <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
              <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#34A853"/>
              <path d="M225 3v65h-9.5V3h9.5z" fill="#EA4335"/>
              <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#FBBC05"/>
              <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#34A853"/>
            </g>
          </svg>
        </div>

        {/* Search Container */}
        <div className="w-full max-w-2xl relative">
          <div className="relative">
            {/* Search Input Container */}
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-3 hover:shadow-md focus-within:shadow-md transition-shadow duration-200 bg-white">
              {/* Search Icon */}
              <svg className="w-4 h-4 text-gray-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
              
              {/* Input Field */}
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyPress={handleEnterKey}
                className="flex-1 outline-none text-base text-gray-900 bg-transparent"
                autoComplete="off"
                aria-label="Search"
              />
              
              {/* Voice Search Button */}
              <button
                type="button"
                onClick={handleVoiceSearch}
                className="ml-3 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Search by voice"
              >
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                </svg>
              </button>
              
              {/* Camera Search Button */}
              <button
                type="button"
                className="ml-2 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Search by image"
              >
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.25 2.26l-.08-.04-.01.02C13.46 2.09 12.74 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c1.19 0 2.34-.21 3.41-.6.3-.11.56-.3.78-.52.22-.22.41-.48.52-.78.39-1.07.6-2.22.6-3.41 0-.74-.09-1.46-.24-2.16l.02-.01-.04-.08C15.49 12.13 14 10.07 14 7.64c0-2.43 1.49-4.49 3.61-6.38z"/>
                  <circle cx="12" cy="12" r="3.2"/>
                </svg>
              </button>
            </div>

            {/* Search Suggestions */}
            {showSearchSuggestions && searchQuery && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg shadow-lg z-10 mt-1">
                {searchSuggestions
                  .filter(suggestion => 
                    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((suggestion, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => selectSuggestion(suggestion)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 text-gray-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                      </svg>
                      <span className="text-gray-900">{suggestion}</span>
                    </button>
                  ))
                }
              </div>
            )}
          </div>

          {/* Search Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              type="button"
              onClick={handleSearchSubmit}
              className="bg-gray-50 border border-gray-50 rounded px-6 py-3 text-sm text-gray-800 hover:shadow-md hover:border-gray-300 transition-all duration-200 font-medium"
            >
              Google Search
            </button>
            <button
              type="button"
              className="bg-gray-50 border border-gray-50 rounded px-6 py-3 text-sm text-gray-800 hover:shadow-md hover:border-gray-300 transition-all duration-200 font-medium"
            >
              I'm Feeling Lucky
            </button>
          </div>
        </div>

        {/* Voice Animation Overlay */}
        {showVoiceAnimation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="animate-pulse">
                <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                </svg>
              </div>
              <p className="text-gray-600">Listening...</p>
            </div>
          </div>
        )}

        {/* Language Options */}
        <div className="mt-8 text-sm text-gray-600">
          Google offered in:{' '}
          <a href="#" className="text-blue-600 hover:underline">हिन्दी</a>{' '}
          <a href="#" className="text-blue-600 hover:underline">বাংলা</a>{' '}
          <a href="#" className="text-blue-600 hover:underline">తెలుగు</a>{' '}
          <a href="#" className="text-blue-600 hover:underline">मराठी</a>{' '}
          <a href="#" className="text-blue-600 hover:underline">தமிழ்</a>{' '}
          <a href="#" className="text-blue-600 hover:underline">ગુજરાતી</a>{' '}
          <a href="#" className="text-blue-600 hover:underline">ಕನ್ನಡ</a>{' '}
          <a href="#" className="text-blue-600 hover:underline">മലയാളം</a>{' '}
          <a href="#" className="text-blue-600 hover:underline">ਪੰਜਾਬੀ</a>
        </div>
      </main>

      {/* Footer */}
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
    </div>
  );
};

export default GoogleHomepage;