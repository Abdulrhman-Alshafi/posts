import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPost, fetchComments } from "../services/api";
import styles from "./PostComments.module.css";
import Loader from "../components/Loader";

const PostComments = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let postLoaded = false;
    let commentsLoaded = false;
    fetchPost(postId)
      .then((data) => {
        setPost(data);
        postLoaded = true;
        if (commentsLoaded) setLoading(false);
      })
      .catch(() => {
        console.error("Failed to fetch post");
        postLoaded = true;
        if (commentsLoaded) setLoading(false);
      });

    fetchComments(postId)
      .then((data) => {
        setComments(data);
        commentsLoaded = true;
        if (postLoaded) setLoading(false);
      })
      .catch(() => {
        console.error("Failed to fetch comments");
        commentsLoaded = true;
        if (postLoaded) setLoading(false);
      });
  }, [postId]);

  if (loading) {
    return (
      <div className={styles.container}>
        <Loader text="Loading post and comments..." />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ← Back
      </button>
      {post && (
        <div className={styles.postContainer}>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <p className={styles.postBody}>{post.body}</p>
        </div>
      )}

      <h2 className={styles.commentsTitle}>Comments</h2>

      <div className={styles.commentsList}>
        {comments.map((c) => (
          <div key={c.id} className={styles.commentCard}>
            <p className={styles.commentName}>{c.name}</p>
            <p className={styles.commentBody}>{c.body}</p>
            <p className={styles.commentEmail}>{c.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostComments;
