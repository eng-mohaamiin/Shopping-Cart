import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import NextProducts from './components/NextProducts'

const App = () => {
  return (
    <div >
      <Header />
      <Outlet />
      <NextProducts />
      <Footer />
    </div>
  )
}

export default App
