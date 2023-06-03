import styled from "styled-components"

const StyledFooter = styled.footer`
position: fixed;
  background-color: gray;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  text-align: center;`

export function Footer() {
    return (
        <StyledFooter>
            This is a footer
        </StyledFooter>
    )
}