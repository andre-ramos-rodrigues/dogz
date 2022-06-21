import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Feed from '../Components/Feed/Feed'
import NotFound from '../Components/NotFound'
import { UserContext } from '../UserContext'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'

const User = () => {
  const { data } = React.useContext(UserContext)

  return (
    <section className='container animeLeft'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed />} user={data.id}/>
        <Route path='postagem' element={<UserPhotoPost />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default User