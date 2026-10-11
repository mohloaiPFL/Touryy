import React from "react";

export default function Navbar() {
  return (
    <nav className="site-nav" style={styles.navbar}>
      <a href="#home" style={styles.logo}>
        DISCOVER <span style={{ color: "#D9A441" }}>LESOTHO</span>
      </a>

      <div className="site-nav-links" style={styles.links}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#attractions" style={styles.link}>Destinations</a>
        <a href="#film" style={styles.link}>Watch Film</a>
        <a href="#contact" style={styles.button}>Plan Your Visit</a>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 7%",
    background: "#10251C",
    color: "#FFFFFF",
    flexWrap: "wrap",
    gap: "15px"
  },
  logo: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: "20px",
    textDecoration: "none",
    letterSpacing: "1px"
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap"
  },
  link: {
    color: "#FFFFFF",
    textDecoration: "none"
  },
  button: {
    background: "#D9A441",
    color: "#10251C",
    padding: "11px 16px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold"
  }
};
