
import React, { useState } from "react";

export default function VideoShowcase() {
  const [videoUnavailable, setVideoUnavailable] = useState(false);

  return (
    <section id="film" style={styles.section}>
      <div style={styles.heading}>
        <p style={styles.eyebrow}>EXPERIENCE THE KINGDOM</p>
        <h2>Lesotho Through Our Lens</h2>
        <p>
          Discover the mountains, landscapes, and culture of our beautiful
          country.
        </p>
      </div>

      <video
        controls
        preload="metadata"
        playsInline
        aria-label="Lesotho travel film"
        poster="/images/lesotho.jpg"
        onError={() => setVideoUnavailable(true)}
        style={styles.video}
      >
        <source
          src="/videos/%281080p%29.mp4"
          type="video/mp4"
        />
        <source src="/videos/%28720p%29.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>

      <p role={videoUnavailable ? "alert" : undefined} style={styles.caption}>
        {videoUnavailable
          ? "The film could not be loaded. Please try again in a moment."
          : "Select Play to watch the Lesotho travel film."}
      </p>
    </section>
  );
}

const styles = {
  section: {
    background: "#10251C",
    color: "white",
    padding: "65px 7%",
    textAlign: "center"
  },
  heading: {
    marginBottom: "30px"
  },
  eyebrow: {
    color: "#D9A441",
    fontWeight: "bold",
    letterSpacing: "2px"
  },
  video: {
    display: "block",
    width: "100%",
    maxWidth: "950px",
    maxHeight: "540px",
    margin: "0 auto",
    background: "#000000",
    borderRadius: "10px"
  },
  caption: {
    color: "#D5DDD7",
    marginTop: "15px"
  }
};
