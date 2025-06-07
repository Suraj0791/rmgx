import React from "react";
import SearchSuggestions from "./SearchSuggestions";

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
  selectSuggestion,
}) => {
  return (
    <div className="relative">
      <div className="flex items-center w-full max-w-[584px] h-[46px] bg-white border border-[#dfe1e5] rounded-full hover:shadow-md hover:border-[#dfe1e5] focus-within:shadow-md transition-all duration-200">
        <div className="ml-4 mr-3">
          <svg
            className="w-5 h-5 text-[#9aa0a6]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>

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

        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="flex items-center justify-center w-10 h-10 mr-1"
          >
            <svg
              className="w-5 h-5 text-[#70757a]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        )}

        <div className="mx-3 h-6 border-l border-[#dfe1e5]"></div>

        <button
          type="button"
          onClick={handleVoiceSearch}
          className="mr-4 p-2 hover:bg-[#f8f9fa] rounded-full"
          aria-label="Search by voice"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              fill="#4285f4"
              d="M12 15c1.66 0 3-1.37 3-3V6c0-1.65-1.34-3-3-3S9 4.35 9 6v6c0 1.63 1.34 3 3 3z"
            />
            <path
              fill="#34a853"
              d="M17 12c0 2.08-.8 3.97-2.1 5.39-.26-.81-1-1.39-1.9-1.39h-2c-.9 0-1.64.58-1.9 1.39C7.8 15.97 7 14.08 7 12h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2z"
            />
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

export default SearchBar;
