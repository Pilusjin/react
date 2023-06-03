import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";

const StyledLayout = styled.div`font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;`
export function Layout (props) {
    return (
        <StyledLayout>
            <Header />
            {props.children}
            <Footer/>
        </StyledLayout>
    )
}