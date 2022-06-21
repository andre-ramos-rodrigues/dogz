import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from '../Components/Styles/UserHeader.module.css'
import { useLocation } from 'react-router-dom'

const UserHeaer = () => {
  const [ titulo, setTitulo ] = React.useState('')
  const Location = useLocation()

  React.useEffect(() => {
    const { pathname } = Location
    switch(pathname) {
      case '/conta/postagem' :
        setTitulo('Postar');
        break;
      default:
        setTitulo('Minha conta') 
    }
  }, [Location])
  

  return (
    <header className={styles.header}>
      <h1 className='title'>{titulo}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeaer