import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPostsByUser } from "../services/api";

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {user ? `${user.name}'s Posts` : "Loading..."}
      </h1>

      <div className="grid gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg p-4 shadow">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{post.body}</p>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded"
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
