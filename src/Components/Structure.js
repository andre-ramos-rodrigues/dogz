import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Structure = ({ children }) => {
  return (
    <div>
      <Header />
      { children }
      <Footer />
    </div>
  )
}

export default Structure