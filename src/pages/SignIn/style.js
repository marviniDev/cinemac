import styled from "styled-components";
import backgroundImg from '../../assets/img/background1.png';

export const SectionLogin = styled.section`
  min-height: 100vh;
  overflow: hidden;
`;
export const MainLogin = styled.main`
  min-height: 100vh;

  ::before,::after{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  ::before{
    background-color: #000000;
    opacity: .3;
    z-index: 2;
  }

  ::after {
    background-image: url(${backgroundImg});
    background-position: center right;
    background-size: cover;
    z-index: 1;
    opacity: 1;
    /* filter: grayscale(1); */
  }
`;
export const ContainerLogin = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
`;
export const Login = styled.div`
  z-index: 3;
  color: #262626;
  color: rgba(var(--i1d,38,38,38),1);
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
`;
export const HeaderLogin = styled.div`
  color: #ffffff;
  z-index: 3;

  h1{
    margin-bottom: .5em;
    width: fit-content;
    position: relative;

    ::after{
      content: "";
      position: absolute;
      width: 50%;
      height: 15%;
      background-color: #ffffff;
      border-radius: 1em;
    }
  }
`;
export const FormLogin = styled.form`
  z-index: 3;
`;