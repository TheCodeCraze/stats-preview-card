import styles from "./App.module.css";

export const App = () => {
  return (
    <main className={styles.card}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          Get <span>insights</span> that help your business grow.
        </h1>
        <p className={styles.description}>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className={styles.info}>
          <div className={styles.category}>
            <h2 className={styles.total}>10k+</h2>
            <p className={styles.name}>companies</p>
          </div>
          <div className={styles.category}>
            <h2 className={styles.total}>314</h2>
            <p className={styles.name}>templates</p>
          </div>
          <div className={styles.category}>
            <h2 className={styles.total}>12m+</h2>
            <p className={styles.name}>queries</p>
          </div>
        </div>
      </div>
      <div className={styles.image}></div>
    </main>
  );
};
