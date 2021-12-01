import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: var(--border-radius);

  .fild {
    display: flex;

    input {
      width: 382px;
      height: 38px;
      padding-left: 1em;
    }

    button {
      padding: 0.5em;
      background-color: var(--cor-principal);
      color: var(--cor-fonts-secundary);
      margin-left: 0.5em;
      border-radius: 3px;
    }
  }

  .button {
    button {
      padding: 0.5em;
      background-color: var(--cor-principal);
      color: var(--cor-fonts-secundary);
      border-radius: var(--border-radius);
      span {
        padding: 0em 1em;
      }
    }
  }
`;
