import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --border-radius: 0.3125em;
    --border-radius-tabs: 0.3125em 0.3125em 0rem 0rem;

    --cor-principal: ${sessionStorage.getItem("color") ? `${sessionStorage.getItem("color")}` : "#6271ff"};

    /* login */
    /* --cor-bg-login:#6271ff;
    --cor-bg-panel-login:#ffffff;
    --cor-link-login:#ffffff;
    --cor-link-login2:#6271ff;
    --cor-fonts-primary-login:#585858;
    --cor-fonts-secundary-login:#ffffff;
    --cor-button-login:#6271ff; */

    /* fonts */
    --cor-fonts-primary: #585858;
    --cor-fonts-secundary: #ffffff;
    --cor-fonts-default: #959595;

    --cor-links: #6271ff;
    --cor-border-input: #dedede;
    --cor-li-hover: #dedede;
    --cor-bg-action-menu:#ffffff;
    /* --cor-bg-body: #ffffff; */
    /* --cor-bg-menu: #ffffff; */
    --cor-menu-footer: #dedede;
    --cor-border-menu-footer: #ccc;
  }

  * {
    font-family:'Sans-serif';
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
    font-size: 2.7vh;
  }

  #react-root, article, div, footer, header, main, nav, section {
    /* -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    border: 0 solid #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    position: relative; */
}
  
  body {
    transition: 0.2s linear;
  }

  body.dark{
    background: #333;
    --cor-principal: ${sessionStorage.getItem("color") ? `${sessionStorage.getItem("color")}` : "#6271ff"};
    --cor-button: #6271ff;

    /* fonts */
    --cor-fonts-primary: #f2f2f2;
    --cor-fonts-secundary: #ffffff;
    --cor-fonts-default: #959595;

    --cor-links: #6271ff;
    --cor-border-input: #363b3d;
    --cor-input: #333;
    --cor-li-hover:#515151;
    --cor-bg-action-menu:#333;
    /* --cor-bg-body: #333; */
    /* --cor-bg-menu:#333; */
    --cor-menu-footer: #515151;
    --cor-border-menu-footer: #ccc;
    /* filter: brightness(.8) contrast(1.2); */
  }

  input,select{
    width: 100%;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    font-size: 2.71vh;
    color: #625e7b;
    border: 0.15em solid #e8e8e8;
    box-sizing: border-box;
    border-radius: 0.35em;
    padding: 0.3em 0.2em;
    cursor: auto;
  }
  
  /* input::after {
    content: "";
    width: 40px;
    height: 40px;
    border-radius: 20px;
    top: -8px;
    left: -8px;
    z-index: -1;
    background-color: gray;
    transform: scale(0,0);
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    position: absolute;
  }

  input:hover::after{
    transform: scale(1,1);
  }  */

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius:var(--border-radius);
    cursor: pointer;
    :hover{
      transition:.3s;
      filter:opacity(.9);
    }
  }
  
  /* i{position: relative;}
  i::after {
    content: "";
    width: 40px;
    height: 40px;
    border-radius: 20px;
    top: -8px;
    left: -8px;
    z-index: -1;
    background-color: gray;
    transform: scale(0,0);
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    position: absolute;
  }

  i:hover::after{
    transform: scale(1,1);
  }  */

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
