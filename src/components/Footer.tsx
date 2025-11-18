import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>&copy; 2025 Moms in Catalonia. All rights reserved.</p>
        <div className={styles.links}>
          <a href="/privacy">Privacy</a>
          <a href="/about">About</a>
          <a href="mailto:hello@momsincatalonia.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
