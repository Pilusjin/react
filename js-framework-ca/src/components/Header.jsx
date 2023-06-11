import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartIcon } from "./CartIcon";
import React from "react";

const NavBar = styled.nav`
  font-size: 18px;
  background: linear-gradient(to right, #ff5f6d, #ffc371);
  border-bottom: 1px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2vh;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2vh;
  list-style: none;
  padding-right: 2vh;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #ff5f6d;
  }
`;

const ListItem = styled.li`
  text-decoration: none;
`;

export function Header({ shoppingCart }) {
  return (
    <NavBar>
      <CartIcon shoppingCart={shoppingCart} />
      <StyledList>
        <ListItem>
          <StyledLink to="/">Home</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </ListItem>
      </StyledList>
    </NavBar>
  );
}
