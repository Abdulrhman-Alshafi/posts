import styles from "./CommentCard.module.css";

const CommentCard = ({ c }) => {
  const { name, body, email } = c;
  return (
    <div className={styles.card}>
      <p className={styles.name}>{name}</p>
      <p className={styles.body}>{body}</p>
      <p className={styles.email}>{email}</p>
    </div>
  );
};

export default CommentCard;
