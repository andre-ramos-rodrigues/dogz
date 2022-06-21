import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import { UserContext } from '../../UserContext'
import Error from '../Helper/Error'
import styles from '../Styles/LoginForm.module.css'
import stylesBtn from '../Forms/styles/Button.module.css'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const { userLogin, erro, loading,  } = React.useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()

  if(username.validate() && password.validate()) {
    userLogin(username.value, password.value)
  }
  }
  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input label='usuario' type="text" name='username' {...username}
        />
        <Input label='senha' type="password" name='password' {...password}
        />
        { loading ? <Button disabled>....</Button> : <Button>Entrar</Button>}
        { loading && <h1>Carregando...</h1>}
        <Error error={erro && 'Dados incorretos.'}/>
      </form>
        <Link to='/login/perdeu' className={styles.perdeu}>Perdeu a senha</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui uma conta? cadastre-se agora mesmo!</p>
        <Link to='/login/criar' className={stylesBtn.button}>Cadastro</Link>
      </div>
      </section>
  )
}

export default LoginForm