import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const LeftContent = styled.div``;

export const RightContent = styled.div`
  width: calc(100% - 17em);
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  overflow-y:scroll;
  position:relative;
  background-color: var(--cor-bg-body);

  /* Esconde a tela principal */
  .page-hide {
    -webkit-animation: slide-page-right 1s both;
    animation: slide-page-right 1s both;
  }
  @-webkit-keyframes slide-page-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(-102%);
      transform: translateX(-102%);
      opacity: 0;
    }
  }
  @keyframes slide-page-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(-102%);
      transform: translateX(-102%);
      opacity: 0;
    }
  }

  /* Mostra a tela principal */
  .page-show {
    -webkit-animation: slide-page-left 1s both;
    animation: slide-page-left 1s both;
  }
  @-webkit-keyframes slide-page-left {
    0% {
      -webkit-transform: translateX(-102%);
      transform: translateX(-102%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-page-left {
    0% {
      -webkit-transform: translateX(-102%);
      transform: translateX(-102%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }

  /* Esconde o modal*/
  .modal-hide {
    -webkit-animation: slide-right 1s both;
    animation: slide-right 1s both;
  }
  @-webkit-keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(102%);
      transform: translateX(102%);
      opacity: 0;
    }
  }
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(102%);
      transform: translateX(102%);
      opacity: 0;
    }
  }

  /* Mostra o modal*/
  .modal-active {
    -webkit-animation: slide-left 1s both;
    animation: slide-left 1s both;
  }
  @-webkit-keyframes slide-left {
    0% {
      -webkit-transform: translateX(102%);
      transform: translateX(102%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(102%);
      transform: translateX(102%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1; 
    }
  }
`;
