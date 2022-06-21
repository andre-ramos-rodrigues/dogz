import React from 'react'
import Image from '../Helper/Image'
import styles from '../Styles/FeedPhotosItem.module.css'

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title}/>
      <span className={styles.visualizacao}>Número de acessos: {photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem