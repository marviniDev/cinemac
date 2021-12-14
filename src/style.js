import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --color-main: #0383c4;

    /* login */
    /* --color-bg-login:#6271ff;
    --color-bg-panel-login:#ffffff;
    --color-link-login:#ffffff;
    --color-link-login2:#6271ff;
    --color-fonts-primary-login:#585858;
    --color-fonts-secundary-login:#ffffff;
    --color-button-login:#6271ff; */

    /* fonts */
    --color-fonts-primary: #585858;
    --color-fonts-secundary: #ffffff;
    --color-fonts-default: #656565;
    --color-fonts-invert: #656565;

    --color-links: #6271ff;
    --color-border-input: #dedede;
    --color-li-hover: #dedede;
    --color-li-active:#f0f8ff;
    --color-bg-action-menu:#ffffff;
    --color-bg-body: #ffffff;
    --color-bg-menu: #ffffff;
    --color-menu-footer: #dedede;
    --color-border-menu-footer: #ccc;
    --color-bg-action-menu: #ededed;

    /* box-shadow */
    --box-shadow-btn-menu : inset 0px 0px 1px 1px #666666;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0; 
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    width:100vw;
    height: 100vh;
    font-size: 1.6649323621227887vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    transition: 0.2s ease-in-out;
  }

  body[theme="dark"]{
    background: #303030;
    --color-main: #0383c4;
    --color-button: #6271ff;

    /* fonts */
    --color-fonts-primary: #f2f2f2;
    --color-fonts-secundary: #ffffff;
    --color-fonts-default: #ccc;
    --color-fonts-invert: #ccc;


    --color-links: #0383c4;
    --color-input: #333;
    --color-li-hover:#141414;
    --color-li-active:#252525;
    --color-bg-action-menu:#333;
    --color-bg-body: #181a1b;
    --color-bg-menu:#202325;
    --color-menu-footer: #2b2e30;
    --color-border-menu-footer: #ccc;
    --color-bg-action-menu: #1e1e1e;

    /* box-shadow */
    --box-shadow-btn-menu: inset 0px 0px 1px 1px #d4d4d4
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button:hover{
    opacity: .9;
  }

  .p-toolbar {
    background: var(--color-bg-body);
    border: 1px solid #dee2e6;
  }

  .p-datatable .p-datatable-header {
    background: var(--color-bg-body);
    color: var(--color-fonts-default);
    border: 1px solid #dee2e6;
  }

  .p-toolbar {
    background: var(--color-bg-body);
    border: 1px solid #dee2e6;
  }

  .p-datatable .p-datatable-tbody > tr {
    background: var(--color-bg-body);
    color: var(--color-fonts-default);
    outline-color: #C7D2FE;
  }

  .p-datatable .p-datatable-tbody > tr.p-highlight {
    background: var(--color-bg-body);
    color: var(--color-fonts-default);
  }

  .p-datatable .p-datatable-tbody > tr > td {
    text-align: left;
    border: 1px solid #ffffff;
    border-width: 0 0 1px 0;
    padding: 1rem 1rem;
    outline-color: #C7D2FE;
  }

  .p-datatable .p-datatable-thead > tr > th {
    color: var(--color-fonts-default);
    background: var(--color-bg-body);
    
  }

  .p-inputtext:enabled:hover {
    border-color: #0383c4;
  }

  input,select{
    color: var(--color-fonts-default);
  }

  .p-datatable .p-datatable-thead > tr > th {
    color: var(--color-fonts-default);
    background: var(--color-bg-body);
  }

  .p-inputtext {
    color: #495057;
    background: #ffffff;
  }

  .p-dialog .p-dialog-header {
    background: var(--color-bg-body);
    color: var(--color-fonts-default);
  }

  .p-dialog .p-dialog-content {
    background: var(--color-bg-body);
    color: var(--color-fonts-default);
  }

  .p-dialog .p-dialog-footer {
    background: var(--color-bg-body);
    color: var(--color-fonts-default);
  }

  .p-inputtext {
    background: var(--color-bg-body);
    color: var(--color-fonts-default);
  }

  .p-paginator {
    background: var(--color-bg-body);
    color: var(--color-fonts-default);
  }

.p-dropdown {
  background: var(--color-li-active);
    color: var(--color-main);
  }

  .p-dropdown-panel {
    background: var(--color-bg-body);
    color: var(--color-main);
  }

  .p-datatable .p-sortable-column.p-highlight:hover{
    background: var(--color-bg-body);
    color: var(--color-fonts-default); !important;
}

.p-datatable .p-sortable-column.p-highlight {
  background: var(--color-li-active);
    color: var(--color-fonts-default); !important;
}

.p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover {
  background: var(--color-bg-body);
    color: var(--color-fonts-default);
}

.p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon,
.p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover .p-sortable-column-icon {
    color: var(--color-main);
}

.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
  background: var(--color-li-active);
    color: var(--color-fonts-default);
}

.p-button.p-button-success, .p-buttonset.p-button-success > .p-button, .p-splitbutton.p-button-success > .p-button, .p-fileupload-choose.p-button-success {
    background:  var(--color-main);
    border: 1px solid var(--color-main);
}

.p-button.p-button-success:enabled:active, .p-button.p-button-success:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-success > .p-button:enabled:active, .p-buttonset.p-button-success > .p-button:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-success > .p-button:enabled:active, .p-splitbutton.p-button-success > .p-button:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-success:enabled:active, .p-fileupload-choose.p-button-success:not(button):not(a):not(.p-disabled):active {
  background:  #006091;
    border: 1px solid #006091;
}

.p-button.p-button-success:enabled:hover, .p-button.p-button-success:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-success > .p-button:enabled:hover, .p-buttonset.p-button-success > .p-button:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-success > .p-button:enabled:hover, .p-splitbutton.p-button-success > .p-button:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-success:enabled:hover, .p-fileupload-choose.p-button-success:not(button):not(a):not(.p-disabled):hover {
    background:  #006091;
    border: 1px solid #006091;
}

.p-button.p-button-warning, .p-buttonset.p-button-warning > .p-button, .p-splitbutton.p-button-warning > .p-button, .p-fileupload-choose.p-button-warning {
    background: #f50b4c;
    border: 1px solid #f50b4c;
}

.p-button.p-button-warning:enabled:active, .p-button.p-button-warning:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-warning > .p-button:enabled:active, .p-buttonset.p-button-warning > .p-button:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-warning > .p-button:enabled:active, .p-splitbutton.p-button-warning > .p-button:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-warning:enabled:active, .p-fileupload-choose.p-button-warning:not(button):not(a):not(.p-disabled):active {
  background: #f50b4c;
    border: 1px solid #f50b4c;
}

.p-button.p-button-warning:enabled:hover, .p-button.p-button-warning:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-warning > .p-button:enabled:hover, .p-buttonset.p-button-warning > .p-button:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-warning > .p-button:enabled:hover, .p-splitbutton.p-button-warning > .p-button:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-warning:enabled:hover, .p-fileupload-choose.p-button-warning:not(button):not(a):not(.p-disabled):hover {
  background: #f50b4c;
    border: 1px solid #f50b4c;
}

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--cor-bg-menu);
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

::-webkit-scrollbar-corner{
  background-color: transparent; 
  }
`;
