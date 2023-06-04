import { Link } from "react-router-dom";
import styled from "styled-components"


const Card = styled.div`
    background: white;
    border-radius: 10px;
    border: solid 1px;
    display: grid;
    justify-content: center;
    justify-items: center;
    text-align: center;
    padding: 20px;
    gap: 10px;
    

`

const StyledImage = styled.img`
object-fit: fill;
height: 100%
width: 100%

`
const ImageContainer = styled.div``


    

export  function Product (props) {

    const product = props.product;
    return (
        <Card>
            <h2>{product.title}</h2>
            <ImageContainer>
                <StyledImage src={product.imageUrl} height="100" width={150}   />
            </ImageContainer>
            <p>{product.description}</p>
            {product.price}<br/>
            <Link to={`/product/${product.id}`}>
              <button>View product</button> 
            </Link>
        </Card>
    )
}