import Link from "next/link";
import styles from './Header.module.css';

function Header() {
  return (
        <div>
          <Link className={styles.active} style={{color: 'green'}} href="/dashboard">Dashboard</Link>&nbsp;
          <Link className={styles.inactive} href="/about">About</Link>&nbsp;
          <Link className={styles.inactive} href="/products#sample">Products</Link>&nbsp;
        </div>
  )
}

export default Header