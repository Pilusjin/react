import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
  color: green;
`;

const StyledP = styled.p`
  text-align: center;
  font-size: 1.2em;
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

export function CheckoutSuccessPage({shoppingCart, setShoppingCart}) {

    useEffect(() => {
        setShoppingCart([]);
    }, [setShoppingCart]);

    return (
        <Layout shoppingCart={shoppingCart}  >
            <StyledH1>Success!</StyledH1>
            <StyledP>Your order has been placed.</StyledP>

            <Link to={"/"}>
            <StyledButton>Back to home</StyledButton></Link>
        </Layout>
    )
}
