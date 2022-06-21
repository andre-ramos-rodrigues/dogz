import React from 'react'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../../Hooks/useFetch'
import styles from '../Styles/PhotoDelete.module.css'

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch()

const handleClick = async() => {
  const confirm = window.confirm('Quer mesmo deletar?')
  if(confirm) {
    const { url, options } = PHOTO_DELETE(id)
  const { response } = await request(url, options)
  if(response.ok) window.location.reload()
  }
}

  return (
    <>
      {
        loading? <button disabled className={styles.delete}>Carregando...</button>
        :
        <button className={styles.delete} onClick={handleClick}>
        deletar
        </button>
      }
    </>
  )
}

export default PhotoDelete