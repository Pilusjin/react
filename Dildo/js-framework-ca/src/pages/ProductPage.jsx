import { useEffect } from "react";
import { useState } from "react";
import { Layout } from "../components/Layout";

export function ProductPage() {

    const [products, setProducts] = useState();

    useEffect( () => {
        fetch("https://api.noroff.dev/api/v1/online-shop/")
            .then(response => response.json())
            .then(parsed => setProducts(parsed));

    }, [])

    return (
        <Layout>
            {products?.map(p => <>{p.title}<br/></>)}
        </Layout>
    )
}