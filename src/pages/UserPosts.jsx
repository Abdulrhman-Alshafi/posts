import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPostsByUser } from "../services/api";
import styles from "./UserPosts.module.css";
const UserPosts = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/");
      return;
    }

    setUser(storedUser);

    fetchPostsByUser(storedUser.id)
      .then(setPosts)
      .catch(() => console.error("Failed to fetch posts"));
  }, [navigate]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {user ? `${user.name}'s Posts` : "Loading..."}
      </h1>

      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postBody}>{post.body}</p>
            <button
              className={styles.button}
              onClick={() => navigate(`/postComments/${post.id}`)}
            >
              View Comments
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
