import styled from "styled-components";

const StyledFooter = styled.footer`
  background: gray;
  color: #fff;
  width: 100%;
  padding: 50px 0px;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  p {
    margin: 0 5rem;
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <p>eCome Store</p>
      <p>CopyRight 2023</p>
    </StyledFooter>
  );
}
