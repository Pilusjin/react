import { Layout } from "../components/Layout"
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
display: grid; 
justify-content: center; 
gap: 40px;
margin: 20px;
text-align: center;
`
const StyledImage = styled.img`
object-fit: fill;
height: 200px;
`
const ImageContainer = styled.div` height: 200px; overflow: hidden;`

const ReviewContainer = styled.div`text-align: left; background: green;`


export function ProductPage() {

    const {id} = useParams();
    const [product, setProduct] = useState();

    useEffect( () => {
        fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
            .then(response => response.json())
            .then(parsed => setProduct(parsed));

    }, [])

    return (
        <Layout>
            <ContentContainer>
            <h1>{product?.title}</h1>
            <ImageContainer>
                <StyledImage src={product?.imageUrl} alt="Product image"/>
            </ImageContainer>
            <p>{product?.description}</p>
            
                <h3>Reviews:</h3>
                {product?.reviews.map(r => (
                <ReviewContainer>
                <p>Username: {r.username}</p>
                <p>Rating: {r.rating} </p>
                <p>Description: {r.description}</p>
                </ReviewContainer>
                ))}
            </ContentContainer>
        </Layout>
    )

}