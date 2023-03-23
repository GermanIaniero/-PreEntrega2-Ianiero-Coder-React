
import React from 'react'
import {Routes, Route, Link } from 'react-router-dom'

import Inicio from './Inicio'
import Pc from './Pc'
import Celulares from './Celulares'
import Notebook from './Notebook'
import Error from './Error'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from "./CartWidget"



function NavBar(){
    return (
      
      <div className="container">
        <div className="btn-group">

          <Link to="/" className='btn btn-sucess'>Home </Link>
          <Link to="/pc" className='btn btn-danger'>Pc </Link>
          <Link to="/celulares" className='btn btn-dark'>Celulares </Link>
          <Link to="/notebook" className='btn btn-danger'>Notebooks </Link>

          <Routes>
              <Route path="/" exact element={<Inicio/>}/>
              <Route path="/pc" exact element={<Pc/>}/>
              <Route path="/celulares" exact element={<Celulares/>}/>
              <Route path="/notebook" exact element={<Notebook/>}/>
              <Route path="*" exact element={<Error/>}/>
              
          </Routes>
          
          </div>
       </div>  
       
    )   
}

export default NavBar