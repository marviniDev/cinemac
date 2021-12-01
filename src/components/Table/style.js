import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  color: var(--cor-fonts-primary);
  border-radius: var(--border-radius);
  padding-bottom: .5em;

  .table {
    width: 100%;
    display: table;
  }

  ul {
    display: flex;
    list-style: none;
  }

  ul.thead {
    color: var(--cor-fonts-primary);
    border-bottom: 0.1px solid rgb(230, 230, 230);
    
    li:nth-child(1) {
      display:none;
    }

    li:nth-child(2) {
      width:20em;
      text-align:start;
    }

    li:nth-child(3) {
      width:20em;
    }

    li:nth-child(4) {
      width:20em;
    }

    li:nth-child(5) {
      width:20em;
      text-align:start;
    }

    li:nth-child(6) {
      width:20em;
    }

    li:nth-child(7) {
      width:20em;
    }

    li:nth-child(8) {
      width:20em;
    }

    li:nth-child(9) {
      width:20em;
    }

    li:nth-child(10) {
      width:20em;
    }

    li:nth-child(11) {
      width:20em;
      text-align:start;
    }

    li:nth-child(12) {
      width:20em;
      text-align:start;
    }

    li:nth-child(13) {
      width:20em;
    }
  }

  ul.tbody {
    display: flex;
    flex-direction: column;
    list-style: none;

    ul:nth-child(even) {
      background-color: var(--cor-menu-footer);
    }

    
    li:nth-child(1) {
      display:none;
    }

    li:nth-child(2) {
      width:20em;
      text-align:start;
    }

    li:nth-child(3) {
      width:20em;
    }

    li:nth-child(4) {
      width:20em;
    }

    li:nth-child(5) {
      width:20em;
      text-align:start;
    }

    li:nth-child(6) {
      width:20em;
    }

    li:nth-child(7) {
      width:20em;
    }

    li:nth-child(8) {
      width:20em;
    }

    li:nth-child(9) {
      width:20em;
    }

    li:nth-child(10) {
      width:20em;
    }

    li:nth-child(11) {
      width:20em;
      text-align:start;
    }

    li:nth-child(12) {
      width:20em;
      text-align:start;
    }

    li:nth-child(13) {
      width:20em;
    }
  }

  li {
    padding: 1rem 0rem;
    text-align: center;
    /* border-bottom: 0.1px solid rgb(230, 230, 230); */
    color: var(--cor-fonts-primary);
    font-size: 14px;
    font-weight: 700;
    padding: 1em 1em 1em;
  }

  li.truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .action-menu {
    width: 100px;
    background-color: var(--cor-bg-action-menu);
    position: sticky;
    right: 0px;
    padding: 0.7rem 0rem;
    box-shadow: -1px 0 2px 0 rgb(0 0 0 / 35%);
    display:flex;
    flex-direction:row;
    justify-content:center;
  }

  .btn-menu {
    background-color: transparent;
  }

  .btn-menu i {
    color: var(--cor-fonts-primary);

    :hover {
      color: var(--cor-principal);
    }
  }
`;
