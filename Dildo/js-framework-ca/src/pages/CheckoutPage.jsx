import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";


function Item(item){
    return(
    <div>
        <h3>{item?.item?.title ?? "missing title"}</h3>
        {item?.item?.discountedPrice ? <p>DISCOUNTED PRICE: {item?.item?.discountedPrice}</p> : <p>Price: {item?.price ?? "GRRRAAAATIS"}</p>}
    </div>
    )
}

export function CheckoutPage() { // todo get shoppingCart and setShoppingCart from parent
    
    // todo: empty cart using useEffect?

    const [shoppingCart, setShoppingCart] = useState([  // todo nuke this, just for mock up
        {id: '109566af-c5c2-4f87-86cb-76f36fb8d378', title: 'Vanilla Perfume', description: "Women's perfume that smells a warm and sweet, with nuances of wood and jasmine.", price: 2599.99, discountedPrice: 2079.99},
        {id: '109566af-c5c2-4f87-86cb-76f36fb8d378', title: 'Trynet ditt', description: "Women's perfume that smells a warm and sweet, with nuances of wood and jasmine.", price: 2599.99, discountedPrice: 2079.99}])


    return (
        <Layout>
            <h1>Check out</h1>
            <h2>Shopping cart:</h2>
            {shoppingCart?.map(i => (<Item item={i} />))}

            <Link to={"/checkout/success"}>
            <button onClick={() => setShoppingCart([])}>Checkout</button></Link>
        </Layout>
    )
}