import styled from "styled-components";

const SideBar = styled.aside`
  grid-area: aside;
  background-color: white;
  border: solid 3px blue;
  border-top: solid 30px blue;
  display: flex;
  flex-direction: column;
  padding-left: 5%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default SideBar;
