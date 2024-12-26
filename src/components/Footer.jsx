import React from "react";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      {/* You can add social media links or other information here */}
    </footer>
  );
}

export default Footer;
