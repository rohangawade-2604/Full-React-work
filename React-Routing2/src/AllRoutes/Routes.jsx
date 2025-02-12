import React from 'react'
import { Route } from 'react-router-dom'
import About from '../Component/About'
import Contact from '../Component/Contact'

const Routes = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/' element={<About/>}></Route>
        <Route path='/' element={<Contact/>}></Route>
        <Route path='/' element={<login/>}></Route>
 
    </>
   
  )
}

export default Routes 
