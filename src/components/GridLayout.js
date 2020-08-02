import styled from "styled-components";

const GridLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    "header header"
    "aside main"
    "footer footer";
  grid-template-columns: 20% 1fr;

  @media (max-width: 768px) {
    grid-template-areas:
      "header header"
      "main main"
      "footer footer";
    grid-template-columns: 1fr;
  }
`;

export default GridLayout;
