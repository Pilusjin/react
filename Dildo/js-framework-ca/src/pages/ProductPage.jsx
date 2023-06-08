import { Layout } from "../components/Layout"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
display: grid; 
justify-content: center; 
gap: 40px;
margin: 20px;
text-align: center;
color: #444;
`
const StyledImage = styled.img`
object-fit: contain;
max-height: 100%;
max-width: 100%;
`
const CartButton = styled.button`
  background-color: #008CBA; 
  border: none; 
  color: white; 
  padding: 15px 32px; 
  text-align: center; 
  text-decoration: none; 
  display: inline-block; 
  font-size: 16px; 
  transition-duration: 0.4s; 
  cursor: pointer;
  
  &:hover {
    background-color: #4CAF50;
    color: white;
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  width: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;


const ReviewContainer = styled.div`
  text-align: left;
  background: #F0F0F0;
  padding: 20px;
  border-radius: 10px;
  color: #000;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.1);
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
`;

const ProductTitle = styled.h1`
  color: #008CBA;
  font-size: 2.5rem;
`;

export function ProductPage({ shoppingCart, setShoppingCart }) { 

    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect( () => {
        fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
            .then(response => response.json())
            .then(parsed => setProduct(parsed));

    }, [])

    return (
        <Layout shoppingCart={shoppingCart}>
            <ContentContainer>
            <ProductTitle>{product?.title}</ProductTitle>
            <ImageContainer>
                <StyledImage src={product?.imageUrl} alt="Product image"/>
            </ImageContainer>
            <p>{product?.description}</p>
            <p>Price: ${product?.discountedPrice}</p>
                {product?.discountedPrice < product?.price && 
                <p>
                Discount: ${product.price - product.discountedPrice} ({((1 - product.discountedPrice / product.price) * 100).toFixed(2)}%)
                </p>
                }
            <CartButton onClick={() => setShoppingCart([...shoppingCart, product])}>Add to cart</CartButton>
                <h3>Reviews:</h3>
                {product?.reviews.map((r, index) => (
                <ReviewContainer key={index}>
                <p>Username: {r.username}</p>
                <p>Rating: {r.rating} </p>
                <p>Description: {r.description}</p>
                </ReviewContainer>
                ))}
            </ContentContainer>
        </Layout>
    )

}
