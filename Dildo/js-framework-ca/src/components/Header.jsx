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


export function Header() {  // todo get shoppingCart from parent

  const [shoppingCart, setShoppingCart] = useState([  // todo nuke this, just for mock up
        {id: '109566af-c5c2-4f87-86cb-76f36fb8d378', title: 'Vanilla Perfume', description: "Women's perfume that smells a warm and sweet, with nuances of wood and jasmine.", price: 2599.99, discountedPrice: 2079.99},
        {id: '109566af-c5c2-4f87-86cb-76f36fb8d378', title: 'Trynet ditt', description: "Women's perfume that smells a warm and sweet, with nuances of wood and jasmine.", price: 2599.99, discountedPrice: 2079.99}])

return (<NavBar>
    <CartIcon shoppingCart={shoppingCart}/>
    <StyledList>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
    </StyledList>
</NavBar>)
}