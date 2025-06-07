import React from "react";

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  searchInputRef,
  handleInputFocus,
  handleInputBlur,
  handleEnterKey,
  handleVoiceSearch,
  showSearchSuggestions,
  searchSuggestions,
  selectSuggestion
}) => {
  return (
    <div className="relative">
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-3 hover:shadow-md focus-within:shadow-md transition-shadow duration-200 bg-white">
        <svg className="w-4 h-4 text-gray-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        
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

      <SearchSuggestions 
        searchQuery={searchQuery}
        suggestions={searchSuggestions}
        selectSuggestion={selectSuggestion}
        show={showSearchSuggestions}
      />
    </div>
  );
};
