const API_URL = "https://jsonplaceholder.typicode.com";

// function for fetching all users
export async function fetchUsers() {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}
// function for fetching post by user
export async function fetchPostsByUser(userId) {
  const res = await fetch(`${API_URL}/posts?userId=${userId}`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}
//function for featching post by id
export async function fetchPost(postId) {
  const res = await fetch(`${API_URL}/posts/${postId}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}
//function for fetching comment by post id
export async function fetchComments(postId) {
  const res = await fetch(`${API_URL}/comments?postId=${postId}`);
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
}
