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

  .p-menubar{
    padding: 0em;
    background-color: transparent;
    border: 0em;
  }

  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link{
    padding: 0em;

    &:hover{
      background-color: transparent;
    }
  }

  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link, .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover{
    background-color: transparent;
    border: none;
  }

  .p-menubar .p-menuitem-link{
    padding: 0em;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Icon = styled.div`
-webkit-border-radius: 50%;
    border-radius: 50%;
    display: inline-block;
    margin: 0 4px;
    padding: 12px;
    overflow: hidden;
    vertical-align: middle;
    cursor: pointer;
    font-size: 1.2em;
    -webkit-user-select: none;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
`;
