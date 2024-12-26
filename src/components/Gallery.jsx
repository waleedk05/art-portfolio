import React, {useState, useEffect} from "react";
import artworksData from "../data/artworks.json";
import Artwork from "./Artwork";
import FilterBar from "./FilterBar";
import styles from "../styles/Gallery.module.css";

function Gallery() {
  const [artworks, setArtworks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Add state for loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call with delay (remove for real API)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setArtworks(artworksData);
      } catch (error) {
        console.error("Error fetching artworks:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };
    fetchData();
  }, []);

  const filteredArtworks = artworks.filter((artwork) => {
    const categoryMatch = filter === "All" || artwork.category === filter;
    const searchMatch = artwork.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div>
      <FilterBar onFilterChange={setFilter} onSearchChange={setSearchTerm} />
      {isLoading ? ( // Conditionally render loader or gallery
        <div className={styles.loader}>Loading...</div>
      ) : (
        <div className={styles.gallery}>
          {filteredArtworks.map((artwork) => (
            <Artwork key={artwork.id} artwork={artwork} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
