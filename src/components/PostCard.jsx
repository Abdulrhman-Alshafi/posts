import styles from "./PostCard.module.css";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();
  if (!post) return null;
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
      <button
        className={styles.button}
        onClick={() => navigate(`/postComments/${id}`)}
      >
        View Comments
      </button>
    </div>
  );
};

export default PostCard;
