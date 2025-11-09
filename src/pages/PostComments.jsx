import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPost, fetchComments } from "../services/api";

const PostComments = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost(postId)
      .then(setPost)
      .catch(() => console.error("Failed to fetch post"));

    fetchComments(postId)
      .then(setComments)
      .catch(() => console.error("Failed to fetch comments"));
  }, [postId]);

  return (
    <div className="p-6">
      <button onClick={() => navigate(-1)}>Back</button>

      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}

      <h2>Comments</h2>
      <div className="space-y-3">
        {comments.map((c) => (
          <div key={c.id}>
            <p>{c.name}</p>
            <p>{c.body}</p>
            <p>{c.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostComments;
