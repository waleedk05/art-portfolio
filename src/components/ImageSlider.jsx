import React, {useState} from "react";
import styles from "../styles/ImageSlider.module.css";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"; // Import icons

function ImageSlider({images}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div>No images available.</div>; // Handle empty images array
  }

  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={`Artwork Image`}
        className={styles.singleImage}
      />
    );
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.imageSlider}>
      <button className={styles.navButton} onClick={handlePrev}>
        <FaChevronLeft />
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Artwork Image ${currentImageIndex + 1}`}
      />
      <button className={styles.navButton} onClick={handleNext}>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default ImageSlider;
