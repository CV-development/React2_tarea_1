import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'

import HomePage from './views/HomePage'
import Contacto from './views/Contacto'
import NotFound from './views/NotFound'

import './App.css'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/contacto'
          element={<Contacto />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>
  )
}

export default App
