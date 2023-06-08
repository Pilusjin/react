import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  display: grid;
  justify-content: center;
  justify-items: center;
  text-align: center;
  padding: 20px;
  gap: 10px;
`;

const StyledImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 100px;
  overflow: hidden;
  margin: 10px;
`;

const StyledButton = styled.button`
  background-color: #ff5f6d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ffc371;
  }
`;

export function Product(props) {
  const product = props.product;

  return (
    <Card>
      <h2>{product.title}</h2>
      <ImageContainer>
        <StyledImage src={product.imageUrl} />
      </ImageContainer>
      <p>{product.description}</p>
      {product.price}
      <br />
      <Link to={`/product/${product.id}`}>
        <StyledButton>View product</StyledButton>
      </Link>
    </Card>
  );
}
