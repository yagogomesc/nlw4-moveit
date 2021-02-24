import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/yagogomesc.png" alt="Yago Gomes" />
      <div>
        <strong>Yago Gomes</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}
