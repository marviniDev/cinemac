import React, { useContext } from 'react';
import { Route, Redirect} from "react-router-dom"
import { SectionLogin, MainLogin, ContainerLogin, HeaderLogin, FormLogin, Login } from './style';
import Logo from '../../assets/img/icon-circle-blue.png';
import AuthContext from '../../contexts/auth';
import * as Auth from '../../services/auth';

const SignIn = () => {
  const { signed, setSigned } = useContext(AuthContext);

  async function handleSubmit(e) {
    setSigned(true)
    console.log(signed);
    localStorage.setItem('@app::user', JSON.stringify('a'))
  }

  return (
    <SectionLogin>
      <MainLogin>
        <ContainerLogin>
          <HeaderLogin>
            <h1 className="font white-text suave active">
              Cinemac
              <div className="divider white"></div>
            </h1>
            <p className="white-text suave condesed active">
              O gerenciador de cinemas feito para você!
            </p>
          </HeaderLogin>
          <Login>
            <div id="loading" className="suave white active">
              <div className="central">
                <h6 className="mini-title center-align"><b className="purpler-text">Aguarde...</b></h6>
                <div className="progress blue-grey lighten-4">
                  <div className="indeterminate cor1"></div>
                </div>
              </div>
            </div>
            <div className="loginHeader">
              <img src={Logo} alt="logo cinemac" />
              <h3>LOGIN</h3>
            </div>
            {signed == true ? <Redirect to='/app'/> : null}
            <FormLogin className="loginForm active">
              <div className="input-fild">
                <label htmlFor="email">E-MAIL</label>
                <input type="email" name="email" id="email" placeholder="usuario@gmail.com" />
              </div>

              <div className="input-fild">
                <label htmlFor="password">SENHA</label>
                <input type="password" name="password" id="password" />
              </div>

              <div className="button">
                <button type="button" onClick={handleSubmit}>Entrar</button>
              </div>
            </FormLogin>
          </Login>
        </ContainerLogin>
      </MainLogin>
    </SectionLogin>
  )
}

export default SignIn;