import Link from "next/link";

export default function Products() {
    return (
        <div className='main'>
            <Link href={'/products/product-details'}>Product 1 Details</Link>&nbsp;
            <Link href={'/products/product-details'}>Product 2 Details</Link>
        </div>
    )
}