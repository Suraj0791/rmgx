import React, { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import GoogleLogo from "./components/GoogleLogo";
import SearchBar from "./components/SearchBar";
import VoiceSearchOverlay from "./components/VoiceSearchOverlay";
import LanguageOptions from "./components/LanguageOptions";
import Footer from "./components/Footer";

const GoogleHomepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showVoiceAnimation, setShowVoiceAnimation] = useState(false);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const searchInputRef = useRef(null);

  const searchSuggestions = [
    "react js tutorial",
    "react hooks examples",
    "react best practices",
    "react performance optimization",
  ];

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        searchQuery
      )}`;
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  const handleVoiceSearch = () => {
    setShowVoiceAnimation(true);
    setTimeout(() => {
      setShowVoiceAnimation(false);
      setSearchQuery("Hello, how are you?");
    }, 2000);
  };

  const handleInputFocus = () => {
    setShowSearchSuggestions(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowSearchSuggestions(false), 200);
  };

  const selectSuggestion = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSearchSuggestions(false);
    searchInputRef.current?.focus();
  };

  const handleLuckyClick = () => {
    window.location.href = "https://www.google.com/doodles";
  };

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-6 -mt-20">
        <GoogleLogo />

        <div className="w-full max-w-[584px] relative">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            searchInputRef={searchInputRef}
            handleInputFocus={handleInputFocus}
            handleInputBlur={handleInputBlur}
            handleEnterKey={handleEnterKey}
            handleVoiceSearch={handleVoiceSearch}
            showSearchSuggestions={showSearchSuggestions}
            searchSuggestions={searchSuggestions}
            selectSuggestion={selectSuggestion}
          />

          <div className="flex justify-center mt-8 space-x-3">
            <button
              onClick={handleSearchSubmit}
              className="bg-[#f8f9fa] text-sm px-4 py-2 rounded hover:shadow-md border border-[#f8f9fa] hover:border-gray-300 text-gray-800"
            >
              Google Search
            </button>
            <button
              onClick={handleLuckyClick}
              className="bg-[#f8f9fa] text-sm px-4 py-2 rounded hover:shadow-md border border-[#f8f9fa] hover:border-gray-300 text-gray-800"
            >
              I'm Feeling Lucky
            </button>
          </div>
        </div>

        <VoiceSearchOverlay show={showVoiceAnimation} />
        <LanguageOptions />
      </main>

      <Footer />
    </div>
  );
};

export default GoogleHomepage;
