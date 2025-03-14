import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 4rem 0 1.875rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${(props) => props.theme["blue-700"]};
`;
