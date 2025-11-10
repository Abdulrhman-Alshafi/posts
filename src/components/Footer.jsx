import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} MyPost. All rights reserved.</p>
      <p className={styles.subtext}>Built by Abd Ulrhman with ❤️ </p>
    </footer>
  );
};

export default Footer;
