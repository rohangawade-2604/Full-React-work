import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Header from './header-component/header'
import Home from './header-component/Home'
import About from './header-component/about'
import Service from './header-component/Service'
import Contact from './header-component/contact'
import HomeList from './Home Components/HomeList'
import AboutList from './about Component/AboutList'
import Person from './personalize-component/person'

import Footer from './Footer component/footer'
import Aboutslist from './components3/abou1list'
import Servicelist from './Service component/serv1list'
import ContactPage from './contact component/contact1'


function App() {
 

  return (
    <>
     <Header/>
   
      <Routes>
        <Route path='/' element={<HomeList />} />
        <Route path='/about' element={<Aboutslist/>} />
        <Route path='/service' element={<Servicelist />} />
        <Route path='/contact' element={< ContactPage/>} />
      </Routes>

    
      {/* <AboutList/> */}
      
     
     

      <Footer />

      
        
    </>
  )
}

export default App
