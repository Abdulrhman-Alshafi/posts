import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../services/api";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  const handleLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/userPosts");
  };

  if (loading) {
    return <div>Loading users...</div>;
  }

  return (
    <div>
      <div>
        <h1>Login</h1>
        <LoginForm users={users} onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
