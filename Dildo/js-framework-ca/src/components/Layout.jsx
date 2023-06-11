import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";

const StyledLayout = styled.div`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export function Layout(props) {
  return (
    <StyledLayout>
      <Header shoppingCart={props.shoppingCart} />
      {props.children}
      <Footer />
    </StyledLayout>
  );
}
