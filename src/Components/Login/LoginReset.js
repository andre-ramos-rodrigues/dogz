import React from 'react'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_RESET } from '../../api'
import { useNavigate } from 'react-router-dom'
import Error from '../Helper/Error'
import Head from '../Helper/Head'

const LoginReset = () => {
  const { key, setKey } = React.useState('')
  const { login, setLogin } = React.useState('')
  const password = useForm('')
  const { loading, error, request } = useFetch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(password.validate()) {
      const { url, options } = PASSWORD_RESET({
      login, key, password: password.value
    })
    const { response } = await request(url, options)
    if(response.ok) navigate('/login')
    }
      }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if(key) setKey(key)
    if(login) setLogin(login)
  }, [setKey, setLogin])

  return (
    <section className='animeLeft'>
      <Head title='Resetar senha'/>
      <h1>Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label='nova senha' type='password' name='password' {...password}/>
        {
          loading? <Button disabled>enviando...</Button> : <Button>reset</Button>
        }
        
      </form>
      {
        error && <Error error={error} />
      }
      
    </section>
  )
}

export default LoginReset