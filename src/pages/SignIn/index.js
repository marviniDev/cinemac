import React, { useContext } from 'react';
import { SectionLogin, MainLogin, ContainerLogin, HeaderLogin, FormLogin, Login } from './style';
import Logo from '../../assets/img/icon-circle-blue.png';
import AuthContext from '../../contexts/auth';

const SignIn = () => {
  const { signed, signIn } = useContext(AuthContext);

  console.log(signed);

  async function handleSubmit(e) {
    e.preventDefault();
    signIn();
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

            <FormLogin className="loginForm active" onSubmit={handleSubmit}>
              <div className="input-fild">
                <label htmlFor="email">E-MAIL</label>
                <input type="email" name="email" id="email" placeholder="usuario@gmail.com" />
              </div>

              <div className="input-fild">
                <label htmlFor="password">SENHA</label>
                <input type="password" name="password" id="password" />
              </div>

              <div className="button">
                <button type="submit">Entrar</button>
              </div>
            </FormLogin>
          </Login>
        </ContainerLogin>
      </MainLogin>
    </SectionLogin>
  )
}

export default SignIn;