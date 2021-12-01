import styled from "styled-components";

export const ModalModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  transform:translateX(102%);
  background-color:var(--cor-bg-menu);
  padding:1em;
  border-radius:var(--border-radius);

  .modal-header{
    display:flex;
    flex-direction:row;
    align-items:center;
    flex-wrap:wrap;
    justify-content:space-between;
    color: var(--cor-fonts-primary);
    .modal-header-buttons{
      width:17em;
      display:flex;
      flex-direction:row;
      flex-wrap:wrap;
      justify-content:space-between;

      button{
        display:flex;
        flex-direction:row;
        align-items:center;
        padding:.5em;

        p{
          padding: 0em 1em;
        }

        :nth-child(1){
          background-color:red;
          color:var(--cor-fonts-secundary);
        }

        :nth-child(2){
          background-color:limegreen;
          color:var(--cor-fonts-secundary);
        }
      }
    }
  }

  .tabs{
    margin-top: 1rem;
    border-bottom: 2px solid var(--cor-principal);
    display:flex;
    flex-direction: row;
    align-items: flex-end;

    /* .tabs-row{
      display:flex;
      flex-direction:row;
      border-radius: var(--border-radius-tabs);
      background-color: var(--cor-principal);} 
    */

    li {
      background-color:var(--cor-menu-footer);
      color:var(--cor-fonts-primary);
      padding:1em;
      
      :hover {
        color: var(--cor-fonts-secundary);
        background-color: var(--cor-principal);
        transition:0.3s ease-in;
      }
    }

    li.active{
        background-color:var(--cor-principal);
        color: var(--cor-fonts-secundary);
    }
  }

  .form-cadastro{
    display:flex;
    flex-direction:column;
    .form-group{
      margin: 1rem 1rem 1rem 1rem;
      display:flex;
      flex-direction:row;
      flex-wrap:wrap;

      label{
        display:flex;
        flex-direction:column;
        color:var(--cor-fonts-primary);
      }

      input, select{
        padding: 0.9em;
        width: 13rem;
        border-radius: var(--border-radius);
        border: 2px solid;
        border-color: rgb(228, 228, 228);
        color: var(--cor-principal);
        font-weight:700;
        text-transform:uppercase;
      }
    }
    .dados-pessoais{
      display:flex;
      flex-direction:row;
      flex-wrap:wrap;
    }
    .dados-endereco{
      display:flex;
      flex-direction:row;
      flex-wrap:wrap;
    }
    .dados-contato{
      display:flex;
      flex-direction:row;
      flex-wrap:wrap;
    }
    .show{
      display:flex;
    }
    .hide{
      display:none;
    }
  }
`;


    /* .container{
      border-radius: 0em 0em 1em 0em;
      background-color: lightgray;
    }
    .container.active{
      color: var(--cor-fonts-secundary);
    border-radius: 0em 0em 1em 0em;
      li{
        border-radius: .5em .5em 1em 0em;
        background-color: var(--cor-principal);
        color: var(--cor-fonts-secundary)
      }
    }

    .container.active + .container{
      border-radius: 0em 0em 0em 1em;
    }

    .container.active + .container ~ .container{
      border-radius: 0em 0em 0em 0em;
    }

    .container + :nth-child(2){
      border-radius: 0em 0em 0em 0em;
    }
  } */

  /* ul.tabs {
  margin: 0;
  list-style-type: none;
  line-height: 35px;
  max-height: 35px;
  overflow: hidden;
  display: inline-block;
  padding-right: 20px
}

ul.tabs > li.active {
  z-index: 2;
  background-color: var(--cor-principal);
  color:var(--cor-fonts-secundary)
}

ul.tabs > li.active:before {
  border-color: transparent var(--cor-principal) transparent transparent;
}

ul.tabs > li.active:after {
  border-color: transparent transparent transparent var(--cor-principal);
}

ul.tabs > li {
  float: right;
  margin: 5px -10px 0;
  border-top-right-radius: 25px 170px;
  border-top-left-radius: 20px 90px;
  padding: 0 30px 0 25px;
  height: 170px;
  background: #ddd;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .5);
  max-width: 200px;
}

ul.tabs > li > a {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: #222;
} */

/* ul.tabs > li:before,
ul.tabs > li:after {
  content: '';
  background: transparent;
  height: 20px;
  width: 20px;
  border-radius: 100%;
  border-width: 10px;
  top: 0px;
  border-style: solid;
  position: absolute;
}

ul.tabs > li:before {
  border-color: transparent #ddd transparent transparent;
  -webkit-transform: rotate(48deg);
  -moz-transform: rotate(48deg);
  -ms-transform: rotate(48deg);
  -o-transform: rotate(48deg);
  transform: rotate(48deg);
  left: -23px;
}

ul.tabs > li:after {
  border-color: transparent transparent transparent #ddd;
  -webkit-transform: rotate(-48deg);
  -moz-transform: rotate(-48deg);
  -ms-transform: rotate(-48deg);
  -o-transform: rotate(-48deg);
  transform: rotate(-48deg);
  right: -17px;
}


.clearfix:before, .clearfix:after { content: ""; display: table; }
.clearfix:after { clear: both; }
.clearfix { zoom: 1; }
*/
