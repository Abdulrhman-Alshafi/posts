import styles from "./Loader.module.css";

const Loader = ({ text = "Loading " }) => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>{text}</p>
    </div>
  );
};

export default Loader;
