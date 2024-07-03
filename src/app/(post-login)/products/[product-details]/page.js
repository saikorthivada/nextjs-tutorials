// export const metadata = {
//     title: 'Products'
// }

export const generateMetadata = async ({params}) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params['product-details']}`);
    const response = await data.json();
    return {
        title: `Product- ${response.title}`
    }
}
export default function ProductDetails(props) {
    return (
        <h1>Product {props.params['product-details']} Details page</h1>
    )
}