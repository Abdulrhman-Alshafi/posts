import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPostsByUser } from "../services/api";
import styles from "./UserPosts.module.css";
import Loader from "../components/Loader";
import PostCard from "../components/PostCard";
const UserPosts = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/");
      return;
    }

    setUser(storedUser);

    fetchPostsByUser(storedUser.id)
      .then((data) => setPosts(data))
      .catch(() => console.error("Failed to fetch posts"))
      .finally(() => setLoading(false));
  }, [navigate]);

  if (loading) {
    return (
      <div className={styles.postsGrid}>
        <Loader />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {user ? `${user.name}'s Posts` : "Loading..."}
      </h1>

      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <PostCard key={post} post={post} />
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
