
import React from "react";

export default function AttractionDetails({ attraction, onClose }) {
  if (!attraction) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="attraction-title"
        style={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={styles.close}
          aria-label="Close destination details"
        >
          ✕
        </button>

        <img
          src={`${process.env.PUBLIC_URL}${attraction.image}`}
          alt={attraction.name}
          style={styles.image}
        />

        <div style={styles.content}>
          <p style={styles.category}>{attraction.category}</p>

          <h2 id="attraction-title">{attraction.name}</h2>

          <p><strong>Location:</strong> {attraction.location}</p>

          <p>{attraction.description}</p>

          {attraction.activities && (
            <>
              <h3>Activities</h3>
              <ul>
                {attraction.activities.map((activity, index) => (
                  <li key={`${activity}-${index}`}>{activity}</li>
                ))}
              </ul>
            </>
          )}

          {attraction.duration && (
            <p><strong>Suggested duration:</strong> {attraction.duration}</p>
          )}

          {attraction.cost && (
            <p><strong>Estimated cost:</strong> {attraction.cost}</p>
          )}

          <a href="#contact" onClick={onClose} style={styles.button}>
            Enquire About This Destination
          </a>
        </div>
      </section>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.75)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    zIndex: 1000,
    overflowY: "auto"
  },
  modal: {
    position: "relative",
    width: "100%",
    maxWidth: "650px",
    maxHeight: "90vh",
    overflowY: "auto",
    background: "#FFFFFF",
    borderRadius: "12px",
    color: "#20352A"
  },
  close: {
    position: "absolute",
    top: "12px",
    right: "12px",
    border: "none",
    background: "#FFFFFF",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    zIndex: 1
  },
  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover"
  },
  content: {
    padding: "24px",
    lineHeight: 1.7
  },
  category: {
    color: "#9B752D",
    fontWeight: "bold"
  },
  button: {
    display: "inline-block",
    marginTop: "15px",
    padding: "12px 18px",
    background: "#173C2B",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px"
  }
};
