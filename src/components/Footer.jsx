


export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <div>
          <h3>
            DISCOVER <span style={{ color: "#D9A441" }}>LESOTHO</span>
          </h3>
          <p>Experience the Kingdom in the Sky.</p>
        </div>

      </div>

      <div style={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Discover Lesotho. All rights reserved.
        </p>
        <a href="#home" style={styles.backToTop}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#0A1912",
    color: "white",
    padding: "35px 7% 15px"
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "25px"
  },
  bottom: {
    borderTop: "1px solid #34453B",
    marginTop: "30px",
    paddingTop: "15px",
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
    flexWrap: "wrap",
    color: "#C5CEC8",
    fontSize: "13px"
  },
  backToTop: {
    color: "#D9A441",
    textDecoration: "none"
  }
};
