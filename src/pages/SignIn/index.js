import { SectionLogin, MainLogin, ContainerLogin, HeaderLogin, FormLogin, Login } from "./style";
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/icon-circle-blue.png';

const SignIn = () => {
  return (
    <SectionLogin>
      <MainLogin>
        <ContainerLogin>
          <HeaderLogin>
            <h1 class="font white-text suave active">
              Cinemac
              <div class="divider white"></div>
            </h1>
            <p class="white-text suave condesed active">
              O gerenciador de cinemas feito para você!
            </p>
          </HeaderLogin>
          <Login>
            <div id="loading" class="suave white active">
              <div class="central">
                <h6 class="mini-title center-align"><b class="purpler-text">Aguarde...</b></h6>
                <div class="progress blue-grey lighten-4">
                  <div class="indeterminate cor1"></div>
                </div>
              </div>
            </div>
            <div className="loginHeader">
              {/* <img src={Logo} /> */}
              <h3>Entrar</h3>
            </div>

            <form className="loginForm active">
              <div className="input-fild">
                <label htmlFor="email">EMAIL</label>
                <input type="email" name="email" id="email" placeholder="usuario@gmail.com" />
              </div>

              <div className="input-fild">
                <label htmlFor="password">SENHA</label>
                <input type="password" name="password" id="password" />
              </div>

              <div className="button">
                <Link to="/app">
                  <button type="submit">Entrar</button>
                </Link>
              </div>
            </form>
          </Login>
        </ContainerLogin>
      </MainLogin>
    </SectionLogin>
  )
}

export default SignIn;