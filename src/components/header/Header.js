"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './Header.module.css';

function Header() {
  const path = usePathname();

  const getActiveClass = (input) => {
    const isActive = path.includes(input);
    return isActive ? styles.active : styles.inactive;
  }
  return (
        <div>
          <Link className={getActiveClass('dashboard')} href="/dashboard">Dashboard</Link>&nbsp;
          <Link className={getActiveClass('about')}  href="/about">About</Link>&nbsp;
          <Link className={getActiveClass('products')}  href="/products#sample">Products</Link>&nbsp;
        </div>
  )
}

export default Header