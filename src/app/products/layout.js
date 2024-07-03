import Link from "next/link"

export default function ProductsLayout({ children }) {
    const productsList = [1, 2, 3, 4, 5]
    return (
        <div className='main'>
            {
                productsList.map((item) => {
                    return <div key={item}>
                        <Link href={`/products/${item}`}>Product {item} Details</Link>
                    </div>
                })
            }
            <div>
                {children}
            </div>
        </div>
    )
}