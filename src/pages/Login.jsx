import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../services/api";
import LoginForm from "../components/LoginForm";
import styles from "./Login.module.css";
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
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <LoginForm users={users} onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
