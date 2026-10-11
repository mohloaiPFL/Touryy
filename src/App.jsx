
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AttractionCard from "./components/AttractionCard";
import AttractionDetails from "./components/AttractionDetails";
import SearchFilter from "./components/SearchFilter";
import EnquiryForm from "./components/EnquiryForm";
import VideoShowcase from "./components/VideoShowcase";
import Footer from "./components/Footer";


import attractions from "./data/Attractions";
import "./App.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [savedDestinations, setSavedDestinations] = useState([]);

  const categories = [
    "All",
    ...new Set(attractions.map((item) => item.category))
  ];

  // Search and filter the destinations.
  const filteredAttractions = attractions.filter((attraction) => {
    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      attraction.name.toLowerCase().includes(search) ||
      attraction.location.toLowerCase().includes(search) ||
      attraction.category.toLowerCase().includes(search) ||
      attraction.description.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All" ||
      attraction.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Open destination details.
  function handleViewDetails(attraction) {
    setSelectedAttraction(attraction);
  }

  // Save or remove a favourite destination.
  function handleToggleSave(id) {
    setSavedDestinations((previous) =>
      previous.includes(id)
        ? previous.filter((savedId) => savedId !== id)
        : [...previous, id]
    );
  }

  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <section id="attractions" className="attractions-section">
          <div className="section-heading">
            <p className="section-eyebrow">EXPLORE THE KINGDOM</p>

            <h2>Discover Amazing Destinations</h2>

            <p>
              From breathtaking waterfalls to majestic mountains,
              discover unforgettable places across Lesotho.
            </p>
          </div>

          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={categories}
          />

          <div className="results-info">
            <p>
              {filteredAttractions.length}{" "}
              {filteredAttractions.length === 1
                ? "destination"
                : "destinations"}{" "}
              found
            </p>

            <button
              type="button"
              className="reset-button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>

          {filteredAttractions.length > 0 ? (
            <div className="attractions-grid">
              {filteredAttractions.map((attraction) => (
                <AttractionCard
                  key={attraction.id}
                  attraction={attraction}
                  onViewDetails={handleViewDetails}
                  isSaved={savedDestinations.includes(attraction.id)}
                  onToggleSave={handleToggleSave}
                />
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <h3>No destinations found</h3>
              <p>
                Try another search term or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Show all destinations
              </button>
            </div>
          )}
        </section>

        {savedDestinations.length > 0 && (
          <section className="saved-section">
            <h2>Your Favourite Destinations</h2>

            <p>
              You have saved {savedDestinations.length}{" "}
              {savedDestinations.length === 1
                ? "destination"
                : "destinations"}.
            </p>

            <div className="saved-list">
              {attractions
                .filter((item) => savedDestinations.includes(item.id))
                .map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => handleViewDetails(item)}
                  >
                    ♥ {item.name}
                  </button>
                ))}
            </div>
          </section>
        )}

        <VideoShowcase />

        <EnquiryForm />
      </main>

      <Footer />

      {selectedAttraction && (
        <AttractionDetails
          attraction={selectedAttraction}
          onClose={() => setSelectedAttraction(null)}
        />
      )}
    </div>
  );
}
