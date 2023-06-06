import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";


export function CheckoutSuccessPage() {
    
    // todo: empty cart using useEffect?

    return (
        <Layout>
            <h1>Success!</h1>
            <p>Your order has been placed.</p>

            <Link to={"/"}>
            <button>Back to home</button></Link>
        </Layout>
    )
}
