import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { ReactComponent as MinhasFotos } from '../Assets/feed.svg'
import { ReactComponent as AdicionarFoto } from '../Assets/adicionar.svg'
import { ReactComponent as Sair } from '../Assets/sair.svg'
import styles from '../Components/Styles/UserHeaderNav.module.css'
import useMedia from '../Hooks/useMedia'


const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)')
  const [ mobileMenu, setMobileMenu ] = React.useState(null)
  
  const { pathname } = useLocation()
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
    {
      mobile &&  
      <button aria-label='menu' className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} 
      onClick={() => setMobileMenu(!mobileMenu)}></button>
    }
    <nav className={`${mobile? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
      <NavLink to='/conta' end><MinhasFotos/>{mobile && 'Minhas Fotos'}</NavLink>
      <NavLink to='/conta/postagem'><AdicionarFoto/>{mobile && 'Adicionar foto'}</NavLink>
      <button onClick={userLogout}><Sair/>{mobile && 'Sair'}</button>
    </nav>
    </>
  )
}

export default UserHeaderNav