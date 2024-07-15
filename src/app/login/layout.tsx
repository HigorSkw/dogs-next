import styles from './login-form.module.css';

export default async function ({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </div>
  );
}
