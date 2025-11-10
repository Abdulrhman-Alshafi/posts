import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo} onClick={() => navigate("/")}>
          My<span>Post</span>
        </h1>
        <nav className={styles.nav}>
          {user ? (
            <>
              <button
                onClick={() => navigate("/userPosts")}
                className={styles.link}
              >
                Posts
              </button>
              <button onClick={handleLogout} className={styles.logout}>
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => navigate("/")} className={styles.link}>
              Login
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
