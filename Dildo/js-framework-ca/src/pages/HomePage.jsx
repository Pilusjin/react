import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Product } from "../components/Product";
import SearchBar from "../components/SearchBar";

const ContentContainer = styled.div`
display: grid; 
justify-content: center; 
gap: 40px;
margin: 20px;
grid-template-columns: repeat(3, minmax(0, 1fr));
`


export function HomePage({shoppingCart}) {
    const [products, setProducts] = useState();
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect( () => {
        fetch("https://api.noroff.dev/api/v1/online-shop/")
            .then(response => response.json())
            .then(parsed => setProducts(parsed));

    }, [])

    const productsToRender = filteredResults.length > 0 ? filteredResults : products

    return (
        <Layout shoppingCart={shoppingCart}>
            <SearchBar data={products} setFilteredResults={setFilteredResults}/>
            <h1>Welcome eCom Store</h1>
            <ContentContainer>
            {productsToRender?.map(p => (<Product key={p.id} product={p} />))}
            </ContentContainer>
        </Layout>
    )
} 
