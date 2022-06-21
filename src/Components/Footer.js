import React from 'react'
import styles from './Styles/Footer.module.css'
import { ReactComponent as Dogz} from '../Assets/dogs-footer.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogz />
    <p>Dogz. Direitos reservados.</p>  
    </ footer>
  )
}

export default Footer