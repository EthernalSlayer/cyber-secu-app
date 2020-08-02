import styled from "styled-components";

const MainTitle = styled.h1`
  text-align: center;
  color: ${(props) => (props.black ? "black" : "green")};
`;

export default MainTitle;
