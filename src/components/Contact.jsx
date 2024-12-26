import React from "react";
import {FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa"; // Import icons
import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Get in Touch</h1>
      <p>
        I'm always interested in hearing from creative minds and potential
        collaborators. Feel free to reach out using the information below, or
        drop me a message on social media!
      </p>
      <div className={styles.socialLinks}>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook className={styles.socialIcon} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter className={styles.socialIcon} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className={styles.socialIcon} />
        </a>
      </div>
      <p>Email: your.email@example.com</p>
      <p>Phone: Your Phone Number (Optional)</p>
    </div>
  );
}

export default Contact;
