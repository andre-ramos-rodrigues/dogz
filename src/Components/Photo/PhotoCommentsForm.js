import React from 'react'
import { COMMENT_POST } from '../../api'
import { ReactComponent as Enviar} from '../../Assets/enviar.svg'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import styles from '../Styles/PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [ comment, setComment ] = React.useState('')
  const {request, error} = useFetch()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const { url, options } = COMMENT_POST(id, { comment })
    const { response, json } = await request(url, options)
    if(response.ok) {
      setComments((comments) => [...comments, json])
      setComment('')
    }
  }

  return (
    <>
    <form className={`${styles.form} ${single? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea value={comment} 
      className={styles.textArea}
      onChange={({ target })=> setComment(target.value)}
      id='comment'
      placeholder='comentário'
      name='comment'/>
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error}/>
    </form>
      </>
  )
}

export default PhotoCommentsForm