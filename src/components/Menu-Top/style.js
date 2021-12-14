import styled from "styled-components";

export const TopBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 8px;
  -webkit-box-shadow: 1px 0px 5px 1px #858585;
  box-shadow: 1px 0px 5px 1px #858585;
  background-color: var(--color-bg-body);
  color: var(--color-fonts-invert);

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

  .p-menubar {
    padding: 0em;
    background-color: transparent;
    border: 0em;
  }

  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
    padding: 0em;

    &:hover {
      background-color: transparent;
    }
  }

  .p-menubar
    .p-menubar-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link,
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link:not(.p-disabled):hover {
    background-color: transparent;
    border: none;
  }

  .p-menubar .p-menuitem-link {
    padding: 0em;
  }
`;

export const ContainerAvatar = styled.div`
  margin-right: 0.6em;
  display: flex;
  align-items: center;
  position: relative;
  gap: 0.4em;
`;

export const Details = styled.div`
  display: ${(props) => (props.isClicked ? "block" : "none")};
  position: absolute;
  min-width: 140px;
  z-index: 3;
  top: 130%;
  right: 1em;
  background: var(--color-menu-footer);
  border-radius: 7.5px;
  box-shadow: 1px 0px 5px 1px #858585;
  padding: 1em;
  transition: all 0.3s ease-in-out;

  li:hover {
    color: var(--color-main);
    transition: all 0.3s ease-in-out;
  }

  :before {
    content: "";
    position: absolute;
    top: -0.8em;
    right: 0;
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 25px solid var(--color-menu-footer);
  }
`;
