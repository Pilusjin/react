import CartOutlineSvg from "../assets/cart-outline.svg"
import styled from "styled-components"
import { Link } from "react-router-dom";


const CartIconContainer=styled.div`
position: relative;
width: 40px;
height: 40px;`

const Overlay = styled.div`
position: absolute;
  inset: 0;
  width: 40px;
  height: 40px;
  cursor: default;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

export function CartIcon (shoppingCart) {

    return (
        <Link to={"/checkout"}>
        <CartIconContainer >
            <img src={CartOutlineSvg} alt="cart" />
            <Overlay>
                <p>{shoppingCart.shoppingCart.length}</p>
            </Overlay>
            
        </CartIconContainer>
        </Link>

    )
}