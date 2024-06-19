import styles from "./footer.module.css";
export default function Footer({ completedTask, totalTask }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed: {completedTask}</span>
      <span className={styles.item}>Total: {totalTask}</span>
    </div>
  );
}
