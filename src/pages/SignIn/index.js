import { Route, Redirect } from "react-router-dom"
import React, { useContext, useEffect, useState } from 'react';

import { SectionLogin, MainLogin, ContainerLogin, HeaderLogin, FormLogin, Login } from './style';
import Logo from '../../assets/img/icon-circle-blue.png';
import AuthContext from '../../contexts/auth';
import * as Auth from '../../services/auth';

import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';


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
            <FormikFormDemo />
          </Login>
        </ContainerLogin>
      </MainLogin>
    </SectionLogin>
  )
}

const FormikFormDemo = () => {
  const [countries, setCountries] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  // const countryservice = new CountryService();

  useEffect(() => {
    // countryservice.getCountries().then(data => setCountries(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
      setFormData(data);
      setShowMessage(true);

      formik.resetForm();
    }
  });

  const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
  };

  const dialogFooter = <div className="p-d-flex p-jc-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="p-mt-2">Suggestions</p>
      <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: '1.5' }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  return (
    <div className="form-demo">
      <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
        <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
          <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
          <h5>Registration Successful!</h5>
          <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
            Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
          </p>
        </div>
      </Dialog>

      <div className="p-d-flex p-jc-center">
        <div className="card">
          <div className="loginHeader">
            <img src={Logo} alt="logo cinemac" />
            <h3>LOGIN</h3>
          </div>
          <h5 className="p-text-center">Entrar</h5>
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
                <Password id="password" name="password" value={formik.values.password} onChange={formik.handleChange} toggleMask
                  className={classNames({ 'p-invalid': isFormFieldValid('password') })} header={passwordHeader} footer={passwordFooter} />
                <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>Password*</label>
              </span>
              {getFormErrorMessage('password')}
            </div>

            <Button color={'blue'} style={{ backgroundColor: 'linear-gradient(180deg, #25C8BC 0%, #0383C4 100%)' }} type="submit" label="Submit" className="p-mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;