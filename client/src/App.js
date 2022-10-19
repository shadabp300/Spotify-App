import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './component/User/Login'
import Register from './component/User/Register'
import Private from './component/Private_component/Private'
import Rating from './component/Rating/Rating'
import Artist from './component/Artist/Artist'
import Addartist from './component/Artist/Add_artist'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route element={<Private/>}>
      <Route path='/star' element={<Rating/>}/>
      <Route path='/artist' element={<Artist/>}/>
      <Route path='/add_artist' element={<Addartist/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App