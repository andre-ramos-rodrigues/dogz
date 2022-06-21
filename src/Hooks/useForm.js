import React from 'react'

const types = {
  email: {
    regex:  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    ,
    message: 'Preencha um email válido'
  },
  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    ,
    message: 'Senha inválida. Deve conter no mínimo 1 minuscula, 1 maiuscula, 1 especial, 1 numero e 8 caracteres'
  },
  number: {
    regex: /^\d+$/,
    message: 'Somente números'
  }
}

const useForm = ( type ) => {
  const [ value, setValue ] = React.useState('')
  const [ error, setError ] = React.useState(null)

  const validate = ( value ) => {
    if(type === false) return true;
    if(value.length === 0) {
      setError('Preencha um valor');
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false
    } else {
      setError(null)
      return true
    }
  }

  const onChange = ({ target }) => {
    if (error) validate(target.value)
    setValue(target.value)
  }
  return { 
    value, setValue, onChange, error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm