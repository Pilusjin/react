import { Link } from "react-router-dom"
import styled from "styled-components"
import { CartIcon } from "./CartIcon"
import React, { useState } from "react";

const NavBar=styled.nav`
font-size: 18px; 
background-color: darkgrey;
border-bottom: 1px solid;
display: flex;
flex-direction: row;
justify-content: end;
align-items: center;
padding: 2vh;`
const StyledList=styled.ul`
display: flex;
  flex-direction: row;
  gap: 2vh;
  list-style: none;`


export function Header({shoppingCart}) { 

return (<NavBar>
    <CartIcon shoppingCart={shoppingCart}/>
    <StyledList>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
    </StyledList>
</NavBar>)
}