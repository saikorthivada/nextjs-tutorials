export default function ProductDetails(props) {
    console.log(props.params['product-details']);
    return (
        <h1>Product {props.params['product-details']} Details page</h1>
    )
}