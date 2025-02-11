import styles from "./footer.module.css";
export default function Footer({ CompletedTodos, TotalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Total Todos:{TotalTodos}</span>
      <span className={styles.item}>Completed Todos:{CompletedTodos}</span>
    </div>
  );
}
