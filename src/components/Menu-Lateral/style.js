import styled from "styled-components";

export const MenuDiv = styled.div`
  width: 17em;
  height: 100%;
  position: relative;
  background-color: var(--cor-bg-menu);
  box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 25%);
  display: flex;
  flex-direction: column;

  .menu-header {
    color: var(--cor-fonts-primary);
    display: flex;
    align-items: center;
    padding: 12px;

    .info {
      p {
        font-weight: 700;
      }

      p:first-child {
        color: var(--cor-principal);
      }

      p:last-child {
        font-size: 13px;
        margin-top: 0.5rem;
      }
    }
  }

  .title {
    padding: 1rem;
    font-size: 16px;
    color: var(--cor-fonts-primary);
    font-weight: 700;
  }

  .menu-body {
    width: 100%;
    height: 100%;
    margin-bottom: 3.5em;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }

    li {
      width: 95%;
      border-radius: 0 32px 32px 0;
      height: 44px;
      list-style: none;
      padding: 1rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      color: var(--cor-fonts-primary);
      font-weight: 700;

      i {
        margin-right: 16px;
      }

      :hover {
        background-color: var(--cor-li-hover);
        color: var(--cor-principal);
        transition: 0.5s;
      }
    }

    li.active{
      color:var(--cor-fonts-secundary);
      background-color:var(--cor-principal);
    }
  }

  .menu-footer {
    p {
      font-size: 1em;
    }
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: var(--cor-menu-footer);
    color: var(--cor-fonts-primary);

    .mf-header {
      padding: 1em 0.5em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      i {
        font-size: 1.5em;
        margin-left: 0.2em;
        margin-right: 0.2em;
      }

      .mf-header-left {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .mf-body {
      border-top: 2px solid var(--cor-border-menu-footer);
      padding: 1em;
      display: none;
      .row {
        .tab {
          p {
            font-size: 1em;
          }

          .escolha-tema {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 60px;
            padding: 10px 0px 10px 0px;

            .icon-tema {
              background: #333333;
              width: 38px;
              height: 38px;
              position: relative;
              border-radius: 20px;
              cursor: pointer;

              .icon-tcolor {
                height: 12px;
                width: 12px;
                position: absolute;
                border-radius: 8px;

                input[type="color"] {
                  -webkit-appearance: none;
                  border: none;
                  width: 1em;
                  height: 1em;
                  background-color: transparent;
                  cursor: pointer;
                }
                input[type="color"]::-webkit-color-swatch-wrapper {
                  padding: 0;
                }
                input[type="color"]::-webkit-color-swatch {
                  border: none;
                  border-radius: 100%;
                }
              }

              .icon-tcolor:nth-child(1) {
                left: 0.8em;
                top: 0.2em;
                display: flex;
              }

              .icon-tcolor:nth-child(2) {
                top: 1.1em;
                left: 1.3em;
                background-color: var(--cor-menu-footer);
              }

              .icon-tcolor:nth-child(3) {
                top: 1.1em;
                left: 0.3em;
                background-color: var(--cor-bg-body);
              }
            }

            button.salvar-cor {
              display:flex;
              flex-direction:row;
              justify-content:center;
              padding: 0.5em;
              background-color: var(--cor-principal);
              color: var(--cor-fonts-secundary);
            }
          }
        }
        .modo-escuro {
          display: flex;
          justify-content: space-between;
          align-items: center;

          i {
            font-size: 2.5em;
            cursor: pointer;
          }
        }
      }
    }
  }
  .upper {
    text-transform: uppercase;
  }

  .menu-footer.active {
    .mf-body {
      display: block;
    }
    i.dropdown {
      transition: 0.3s;
      transform: rotate(180deg);
    }
  }
`;
