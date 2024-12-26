import React, {useState} from "react";
import styles from "../styles/FilterBar.module.css";

function FilterBar({onFilterChange, onSearchChange}) {
  const categories = ["All", "Personal", "Commissioned", "Projects"];
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearchChange(event.target.value);
  };

  return (
    <div className={styles.filterBar}>
      <select onChange={(e) => onFilterChange(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default FilterBar;
