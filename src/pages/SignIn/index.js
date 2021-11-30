import React from "react";
// import Titulo from "../../components/Titulo"
import { MainLogin, ContainerLogin } from "./style";
import {Link} from 'react-router-dom';
// import Footer from "../../components/Footer";

const SignIn = () => {
  return(
    <MainLogin className="principal">
      <ContainerLogin>
        <div className="panel-login">
          <form className="form-login">
            <span>Entrar</span>
            <div className="fild">
              <label htmlFor="email">EMAIL</label>
              <input type="email" name="email" id="email" placeholder="usuario@gmail.com"/>
            </div>
            <div className="fild">
              <label htmlFor="password">SENHA</label>
              <input type="password" name="password" id="password"/>
            </div>
            <div className="text1">
              <Link to="*">
                <p>Esqueci minha senha</p>
              </Link>
              <i className="material-icons">visibility</i>
              <i className="material-icons">visibility_off</i>
            </div>
            <div className="button">
              <Link to="/app">
                <button type="button">Entrar</button>
              </Link>
            </div>
            <div className="footer-login">
              <p>ou</p>
              <p><strong>Precisa de ajuda? contate o </strong>
              <Link to="*">
                suporte
              </Link>
              </p>
            </div>
          </form>
        </div>
      </ContainerLogin>
    {/* <Footer></Footer> */}
  </MainLogin>
  )
}

export default SignIn;