import styled from "styled-components";

export const MainLogin = styled.main`
  background-color: var(--cor-bg-login);
  height: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const ContainerLogin = styled.main`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;

  .panel-login {
    position: relative;
    width: 340px;
    height: 462px;
    background: var(--cor-bg-panel-login);
    border-radius: 10px;
    padding: 2rem;

    .form-login {
      width: 100%;

      span {
        display: block;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 30px;
        color: var(--cor-fonts-primary-login);
        text-align: center;
        padding-bottom: 1rem;
      }

      .fild {
        position: relative;

        label {
          color: var(--cor-fonts-primary-login);
          font-weight: 700;
          font-size: 0.8rem;
        }

        input {
          display: block;
          width: 100%;
          height: 48px;
          font-size: 15px;
          color: var(--cor-fonts-primary-login);
          padding: 0rem 1rem 0rem 1rem;
          background: #f7f8f9;
          border: 1px solid #595f60;
          box-sizing: border-box;
          border-radius: 4px;
          margin-bottom: 1.5rem;

          :focus {
            outline: none;
          }
        }
      }

      .text1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;

        a {
          color: var(--cor-link-login2);
          text-decoration: none;
          font-size: 14px;

          :hover {
            color: #4e59c6;
          }
        }

        i:first-of-type {
          display: block;
          color: var(--cor-fonts-primary-login);
          padding-right: 5px;
        }

        i {
          display: none;
        }
      }

      .button button {
        border: none;
        background-color: var(--cor-button-login);
        color: var(--cor-fonts-secundary-login);
        width: 100%;
        height: 48px;
        border-radius: 4px;

        a {
          color: var(--cor-link-login);
          text-decoration: none;
        }

        :focus {
          outline: none;
        }

        :hover {
          background-color: #4e59c6;
          transition: 1s;
        }

        :active {
          background-color: #4e59c6;
        }
      }

      .footer-login {
        color: var(--cor-fonts-primary-login);
        padding-top: 1rem;
        display: block;
        text-align: center;

        p:first-child {
          padding-bottom: 16px;
          color: var(--cor-fonts-primary-login);
          font-size: 1rem;
        }

        p {
          font-size: 14px;
          a {
            color: var(--cor-link-login2);

            :hover {
              color: #4e59c6;
            }
          }
        }
      }
    }
  }
`;
