import { useState } from "react";
import AttractionCard from "./components/Attractions";
import AttractionDetails from "./components/AttractionsDetails";
import EnquiryForm from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SearchFilter from "./components/Search";
import VideoShowcase from "./components/Videos";
import attractions from "./data/Attractions";
import Footer from "./components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [savedAttractions, setSavedAttractions] = useState([]);

  const categories = [...new Set(attractions.map((attraction) => attraction.category))];
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const visibleAttractions = attractions.filter((attraction) => {
    const matchesCategory =
      selectedCategory === "All" || attraction.category === selectedCategory;
    const searchableText = [
      attraction.name,
      attraction.location,
      attraction.category,
      attraction.description
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return matchesCategory && searchableText.includes(normalizedSearch);
  });

  function toggleSavedAttraction(attractionId) {
    setSavedAttractions((previous) =>
      previous.includes(attractionId)
        ? previous.filter((id) => id !== attractionId)
        : [...previous, attractionId]
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="attractions" className="attractions-section" style={styles.attractions}>
          <div className="attractions-heading" style={styles.heading}>
            <p style={styles.eyebrow}>FIND YOUR NEXT ADVENTURE</p>
            <h2>Explore Lesotho</h2>
            <p>
              Discover waterfalls, mountain landscapes, cultural landmarks,
              and more.
            </p>
          </div>

          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={categories}
          />

          {visibleAttractions.length > 0 ? (
            <div className="attractions-grid" style={styles.grid}>
              {visibleAttractions.map((attraction) => (
                <AttractionCard
                  key={attraction.id}
                  attraction={attraction}
                  onViewDetails={setSelectedAttraction}
                  isSaved={savedAttractions.includes(attraction.id)}
                  onToggleSave={toggleSavedAttraction}
                />
              ))}
            </div>
          ) : (
            <p role="status" style={styles.empty}>
              No destinations match your search. Try another name or category.
            </p>
          )}
        </section>

        <VideoShowcase />
        <EnquiryForm />
      </main>
      <Footer />

      <AttractionDetails
        attraction={selectedAttraction}
        onClose={() => setSelectedAttraction(null)}
      />
    </>
  );
}

const styles = {
  attractions: {
    padding: "65px 7%",
    background: "#F5F5F0"
  },
  heading: {
    maxWidth: "700px",
    margin: "0 auto",
    textAlign: "center",
    color: "#20352A"
  },
  eyebrow: {
    color: "#9B752D",
    fontWeight: "bold",
    letterSpacing: "2px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "24px"
  },
  empty: {
    padding: "30px 0",
    textAlign: "center",
    color: "#5B655F"
  }
};

export default App;
