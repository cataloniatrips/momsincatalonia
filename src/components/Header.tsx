import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.nav}>
          <Link href="/" className={styles.logo}>
            🌿 Moms in Catalonia
          </Link>
          <nav className={styles.menu}>
            <Link href="/">Home</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/events">Events</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
