import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  width: ${(props) => (props.isMenuActive ? "20em" : "6em")};

  @media screen and (max-width: 1024px) {
    width: 0em;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 1024px) {
    top: 0;
    z-index: 3;
    position: fixed;
    background-color: #00000057;
    visibility: ${(props) => (props.isMenuActive ? "visible" : "hidden")};
  }
`;

export const MenuDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-body);
  color: var(--color-fonts-default);
  -webkit-box-shadow: 1px 4px 5px 1px #858585;
  box-shadow: 1px 4px 5px 1px #858585;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  position: relative;

  .menu-header {
    color: var(--color-fonts-primary);
    display: flex;
    align-items: center;
    padding: 12px;

    .info {
      p {
        font-weight: 700;
      }

      p:first-child {
        color: var(--color-principal);
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
    color: var(--color-fonts-primary);
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
      margin: 0em 1em;
      border-radius: 5px;
      list-style: none;
      padding: 1rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      color: var(--color-fonts-default);
      font-weight: 700;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease-in-out;

      svg {
        fill: var(--color-fonts-default);
      }

      i {
        margin-right: 16px;
      }

      :hover {
        background-color: var(--color-li-hover);
        color: var(--color-main);
        transition: 0.5s;

        svg {
          fill: var(--color-main);
        }
      }
    }

    a.active {
      li {
        color: var(--color-main);
        background: var(--color-li-active);

        svg {
          fill: var(--color-main);
        }

        :before {
          content: "";
          width: 4px;
          height: 100%;
          position: absolute;
          left: 0;
          background: var(--color-main);
        }
      }
    }
  }

  .menu-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    border-radius: 0em;
    background-color: var(--color-menu-footer);
    color: var(--color-fonts-primary);

    .mf-header {
      padding: 1.4em 0.5em;
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
      border-top: 2px solid var(--color-border-menu-footer);
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
                background-color: var(--color-menu-footer);
              }

              .icon-tcolor:nth-child(3) {
                top: 1.1em;
                left: 0.3em;
                background-color: var(--color-bg-body);
              }
            }

            button.salvar-cor {
              display: flex;
              flex-direction: row;
              justify-content: center;
              padding: 0.5em;
              background-color: var(--color-main);
              color: var(--color-fonts-secundary);
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

  @media screen and (max-width: 1024px) {
    z-index: 999;
    transform: ${(props) =>
      props.isMenuActive ? "translateX(0%)" : "translateX(-100%)"};
    width: calc(100% - 30%);
  }
`;

export const TitleMenu = styled.h4`
  margin: 2em 1em 1em 1em;
`;

export const SvgMenu = styled.div`
  margin-right: 1em;
`;

export const LogoMobile = styled.div`
  padding: 0.8em;
  box-shadow: 1px 0px 5px 1px #858585;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
