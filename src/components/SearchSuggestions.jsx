import React from "react";

const SearchSuggestions = ({ searchQuery, suggestions, selectSuggestion, show }) => {
  if (!show || !searchQuery) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg shadow-lg z-10 mt-1">
      {suggestions
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
  );
};


export default SearchSuggestions;
