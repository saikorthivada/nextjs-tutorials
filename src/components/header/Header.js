import Link from "next/link"

function Header() {
  return (
        <div>
          <Link href="/dashboard">Dashboard</Link>&nbsp;
          <Link href="/about">About</Link>&nbsp;
          <Link href="/products#sample">Products</Link>&nbsp;
        </div>
  )
}

export default Header