
import React from "react";

export default function Attraction({ attraction, onViewDetails, isSaved, onToggleSave }) {
  return (
    <article style={styles.card}>
      <img
        src={`${process.env.PUBLIC_URL}${attraction.image}`}
        alt={attraction.name}
        style={styles.image}
        loading="lazy"
      />

      <div style={styles.content}>
        <p style={styles.location}>
          {attraction.location || "Lesotho"}
        </p>

        <h3>{attraction.name}</h3>

        <p style={styles.description}>
          {attraction.description}
        </p>

        <p>
          <strong>Category:</strong> {attraction.category}
        </p>

        <div style={styles.actions}>
          <button
            onClick={() => onViewDetails(attraction)}
            style={styles.detailsButton}
          >
            Explore Destination
          </button>

          <button
            onClick={() => onToggleSave(attraction.id)}
            style={styles.saveButton}
            aria-label={isSaved ? "Remove saved destination" : "Save destination"}
          >
            {isSaved ? "♥ Saved" : "♡ Save"}
          </button>
        </div>
      </div>
    </article>
  );
}

const styles = {
  card: {
    background: "#FFFFFF",
    color: "#20352A",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    display: "block"
  },
  content: {
    padding: "20px"
  },
  location: {
    color: "#9B752D",
    fontWeight: "bold"
  },
  description: {
    lineHeight: 1.6,
    color: "#5B655F"
  },
  actions: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "18px"
  },
  detailsButton: {
    background: "#173C2B",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "11px",
    cursor: "pointer"
  },
  saveButton: {
    background: "#F3E9D2",
    color: "#173C2B",
    border: "none",
    borderRadius: "5px",
    padding: "11px",
    cursor: "pointer"
  }
};
