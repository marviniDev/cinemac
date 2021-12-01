import styled from "styled-components";

export const Div = styled.div`
  background-color: var(--cor-principal);
  color: var(--cor-fonts-secundary);
  position: relative;
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background-color: transparent;
    color: var(--cor-fonts-secundary);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
