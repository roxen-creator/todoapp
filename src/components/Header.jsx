import styles from "./Header.module.css";
export default function Header() {
  return (
    <div>
      <h1 className={styles.header}>My todo app</h1>
    </div>
  );
}
