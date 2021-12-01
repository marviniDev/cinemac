import styled from 'styled-components'

export const Nav = styled.div`
 ul.pagination {
  margin-top: 1em;
  margin-bottom: 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
}
ul.pagination li.page-item button.page-link.active {
  color: var(--cor-fonts-secundary);
  background-color: var(--cor-principal);
  border-color: #ced4da !important;
}
ul.pagination button.page-link {
    color: #445565;
    background-color: #e3e7eb;
    font-weight: 700;
    margin: 1em 0.5rem;
    padding: 3px 7px;
    border-radius: 2px;
    border: none;
    transition: background-color 0.3s;
}
ul.pagination button.page-link:hover {
  background-color: #f6f6f6;
}
`;
