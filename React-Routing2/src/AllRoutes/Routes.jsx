import React from 'react'
import { Route } from 'react-router-dom'
import About from '../Component/About'
import Contact from '../Component/Contact'
import Login from '../Component/Login'
import NotFoundPages from '../Component/NotFoundPages'

const Routes = () => {
  return (
  <>
 

      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/' element={<About/>}></Route>
        <Route path='/' element={<Contact/>}></Route>
        <Route path='/' element={<login/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/' element={<NotFoundPages/>}></Route>

      </Routes>
    </>
   
  )
}

export default Routes 
