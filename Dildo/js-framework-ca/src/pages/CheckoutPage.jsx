import React from "react";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  background-color: #f3f3f3;
`;

const StyledButton = styled.button`
  background: #008CBA; /* Blue background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 12px 24px; /* Some padding */
  cursor: pointer; /* Mouse pointer on hover */
  display: block;
  margin: 20px auto;

  &:hover {
    background: #007B9A;
  }
`;

const StyledP = styled.p`
  font-weight: bold;
  color: #333;
  text-align: center;
`;

function Item({ item }){
    return(
    <StyledDiv>
        <h3>{item?.title ?? "missing title"}</h3>
        {item?.discountedPrice ? <p>DISCOUNTED PRICE: {item?.discountedPrice}</p> : <p>Price: {item?.price ?? "GRRRAAAATIS"}</p>}
    </StyledDiv>
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

            <StyledP>Total price for you: {totalPrice}</StyledP>
            <Link to={"/checkout/success"}>
            <StyledButton>Checkout</StyledButton></Link>
        </Layout>
    )
}
