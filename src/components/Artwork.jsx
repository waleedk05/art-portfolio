import React, {useState} from "react";
import styles from "../styles/Artwork.module.css";

function Artwork({artwork}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.artwork}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img src={artwork.image} alt={artwork.title} />
      {isHovered && (
        <div className={styles.overlay}>
          <div className={styles.details}>
            <h3>{artwork.title}</h3>
            <p>{artwork.description}</p>
            <p>Category: {artwork.category}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Artwork;
