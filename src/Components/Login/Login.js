import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPerdeu from './LoginPerdeu';
import LoginReset from './LoginReset';
import { UserContext } from '../../UserContext';
import styles from '../Styles/Login.module.css'
import NotFound from '../NotFound';
import Head from '../Helper/Head';

const Login = () => {
  const { login } = React.useContext(UserContext)

  if(login === true)return <Navigate to='/conta'/>
  return (
    <section className={styles.login}>
      <Head title='Login' description='Login do site Dogz'/>
      <div className={styles.forms}>
        <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar" element={<LoginCreate />} />
        <Route path="/perdeu" element={<LoginPerdeu />} />
        <Route path="/reset" element={<LoginReset />} />
        <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
