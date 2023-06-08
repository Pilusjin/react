import React from "react";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";

function Item({ item }){
    return(
    <div>
        <h3>{item?.title ?? "missing title"}</h3>
        {item?.discountedPrice ? <p>DISCOUNTED PRICE: {item?.discountedPrice}</p> : <p>Price: {item?.price ?? "GRRRAAAATIS"}</p>}
    </div>
    )
}

function sum (items){
    return items.reduce( function(a, b){
        return a + (b?.discountedPrice ?? b?.price ?? 0);
    }, 0);
};

export function CheckoutPage({ shoppingCart }) {
    const totalPrice = sum(shoppingCart)

    return (
        <Layout shoppingCart={shoppingCart} >
            <h1>Check out</h1>
            <h2>Shopping cart:</h2>
            {shoppingCart?.map((item, index) => <Item key={index} item={item} />)}

            <p>Total price for you: {totalPrice}</p>
            <Link to={"/checkout/success"}>
            <button>Checkout</button></Link>
        </Layout>
    )
}
