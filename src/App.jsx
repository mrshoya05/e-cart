import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Mainbox from './Components/Main-box'
import MainBox2 from './Components/MainBox2'
import MainBox3 from './Components/MainBox3'
import Cards from './Components/Cards'

function App() {

  return (
    <>
      < Header />
      < Navbar />
      < Mainbox />
      < MainBox2 />
      <MainBox3 />
      <Cards />
      <Footer />
    </>
  )
}

export default App
