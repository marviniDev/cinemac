import styled from "styled-components";

export const Button = styled.div`
  .button {
    padding: 1em;
  }

  .checkbox {
    display: none;
    position: absolute;
  }

  .label {
    background-color: var(--color-main);
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    height: 12px;
    width: 25px;
    transform: scale(1.5);
  }

  .label .ball {
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 1px;
    left: 2px;
    height: 10px;
    width: 10px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }

  .checkbox.checked + .label .ball {
    transform: translateX(12px);
  }
`;
