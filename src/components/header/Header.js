"use client";
import Link from "next/link";
import { useState } from "react";
import styles from './Header.module.css';

function Header() {
  const [count, setCount] = useState(0);
  console.log('header');
  return (
        <div>
          <Link className={styles.active} style={{color: 'green'}} href="/dashboard">Dashboard</Link>&nbsp;
          <Link className={styles.inactive} href="/about">About</Link>&nbsp;
          <Link className={styles.inactive} href="/products#sample">Products</Link>&nbsp;
        </div>
  )
}

export default Header