import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero-section" style={styles.hero}>
      <div style={styles.content}>
        <p style={styles.label}>THE KINGDOM IN THE SKY</p>

        <h1 className="hero-title" style={styles.title}>
          Discover the Beauty of Lesotho
        </h1>

        <p style={styles.description}>
          Explore breathtaking mountains, spectacular waterfalls,
          rich Basotho culture, and unforgettable adventures.
        </p>

        <div style={styles.buttons}>
          <a href="#attractions" style={styles.primaryButton}>
            Explore Destinations
          </a>

          <a href="#film" style={styles.secondaryButton}>
            Watch Our Film ▶
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: "75vh",
    display: "flex",
    alignItems: "center",
    padding: "60px 8%",
    color: "white",
    backgroundImage:
      `linear-gradient(90deg, rgba(8,25,18,0.92), rgba(8,25,18,0.25)), url('${process.env.PUBLIC_URL}/images/lesotho.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  content: {
    maxWidth: "700px"
  },
  label: {
    color: "#D9A441",
    fontWeight: "bold",
    letterSpacing: "4px"
  },
  title: {
    fontSize: "clamp(38px, 6vw, 72px)",
    lineHeight: 1.1,
    margin: "20px 0"
  },
  description: {
    fontSize: "18px",
    lineHeight: 1.8,
    maxWidth: "580px",
    color: "#EEEEEE"
  },
  buttons: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginTop: "30px"
  },
  primaryButton: {
    background: "#D9A441",
    color: "#10251C",
    padding: "14px 22px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold"
  },
  secondaryButton: {
    border: "1px solid white",
    color: "white",
    padding: "14px 22px",
    borderRadius: "5px",
    textDecoration: "none"
  }
};
