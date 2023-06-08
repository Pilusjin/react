import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function CheckoutSuccessPage({shoppingCart, setShoppingCart}) {

    useEffect(() => {
        setShoppingCart([]);
    }, [setShoppingCart]);

    return (
        <Layout shoppingCart={shoppingCart}  >
            <h1>Success!</h1>
            <p>Your order has been placed.</p>

            <Link to={"/"}>
            <button>Back to home</button></Link>
        </Layout>
    )
}
