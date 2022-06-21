import React from 'react'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_LOST } from '../../api'
import Error from '../Helper/Error'
import Head from '../Helper/Head'

const LoginPerdeu = () => {
  const login = useForm()
  const { data, loading, error, request } = useFetch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(login.validate){
      const { url, options } = PASSWORD_LOST({
      login: login.value, url: window.location.href.replace('perdeu', 'resetar')})
    const json = await request(url, options)
    }
    

  }

  return (
    <section className='animeLeft'>
      <Head title='Recuperar conta'/>
      <h1 className='title'>Perdeu a senha?</h1>
      { data? <h2 style={{color: 'lightgreen'}}>{data}</h2> : 
        <form onSubmit={handleSubmit}>
        <Input label='Email / Usuário' type='text' name='email' {...login}/>
        {loading? <Button disabled>enviando...</Button> : <Button>Enviar</Button>}
      </form>
      }
      { error && <Error error={error}/> }
    </section>
  )
}

export default LoginPerdeu