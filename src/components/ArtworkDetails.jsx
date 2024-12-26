import React from "react";
import ImageSlider from "./ImageSlider";
import styles from "../styles/ArtworkDetails.module.css";

function ArtworkDetails({artwork, onClose}) {
  return (
    <div className={styles.artworkDetailsOverlay}>
      <div className={styles.artworkDetailsModal}>
        <button onClick={onClose} className={styles.closeModal}>
          &times;
        </button>
        <h2>{artwork.title}</h2>
        <ImageSlider images={artwork.images} />
        <p>{artwork.description}</p>
        <p>Category: {artwork.category}</p>
      </div>
    </div>
  );
}

export default ArtworkDetails;
