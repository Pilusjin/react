import styled from 'styled-components';

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80vh; 
  color: #333;
  background-color: #f5f5f5;
  font-size: 2rem; 
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
  padding: 24px;
  border-radius: 12px;
  margin: 20px;
`;

function RouteNotFound() {
    return (
        <StyledBox>
            <h1>404</h1>
            <h2>Page Not Found</h2>
        </StyledBox>
    );
}
export default RouteNotFound;
