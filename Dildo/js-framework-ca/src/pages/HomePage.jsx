import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Product } from "../components/Product";

const ContentContainer = styled.div`
display: grid; 
justify-content: center; 
gap: 40px;
margin: 20px;
grid-template-columns: repeat(3, minmax(0, 1fr));
`


export function HomePage() {

    const [products, setProducts] = useState();

     useEffect( () => {
         fetch("https://api.noroff.dev/api/v1/online-shop/")
             .then(response => response.json())
             .then(parsed => setProducts(parsed));

     }, [])

    return (
        <Layout>
            <ContentContainer>
            {products?.map(p => (<Product product={p} />))}
            </ContentContainer>
        </Layout>
    )
} 