import { Redirect } from "react-router-dom"
import React, { useContext } from 'react';

import { SectionLogin, MainLogin, ContainerLogin, HeaderLogin, Login } from './style';
import Logo from '../../assets/img/icon-circle-blue.png';
import AuthContext from '../../contexts/auth';

import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';


const SignIn = () => {
  const { signed, setSigned } = useContext(AuthContext);

  async function handleSubmit(e) {
    setSigned(true)
    localStorage.setItem('@app::user', JSON.stringify('a'))
  }

  return (
    <SectionLogin>
      {signed ? <Redirect to={'/app/filmes'}/> : null}
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
            <FormikFormLogin onSubmit={handleSubmit} />
          </Login>
        </ContainerLogin>
      </MainLogin>
    </SectionLogin>
  )
}

const FormikFormLogin = ({onSubmit}) => {
  // const [formData, setFormData] = useState({});

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      accept: false
    },
    validate: (data) => {
      let errors = {};

      if (!data.email) {
        errors.email = 'Email is required.';
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        errors.email = 'Invalid email address. E.g. example@email.com';
      }

      if (!data.password) {
        errors.password = 'Password is required.';
      }

      return errors;
    },
    onSubmit: (data) => {
      onSubmit();
      formik.resetForm();
    }
  });

  const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
  };

  return (
    <div className="form-demo">
      <div className="p-d-flex p-jc-center">
        <div className="card">
          <div className="loginHeader">
            <img src={Logo} alt="logo cinemac" />
            <h3>LOGIN</h3>
          </div>
          <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="p-field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
              </span>
              {getFormErrorMessage('email')}
            </div>
            <div className="p-field">
              <span className="p-float-label">
                <Password id="password" name="password" value={formik.values.password} onChange={formik.handleChange} toggleMask />
                <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>Password*</label>
              </span>
              {getFormErrorMessage('password')}
            </div>

            <Button type="submit" label="Submit" className="btn-login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;