import './App.scss'

<<<<<<< HEAD
import Footer from './components/Footer/Footer'
import { useState } from 'react'
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { PackagesPage } from './Pages/PackagesPage/PackagesPage'
>>>>>>> develop

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PackagesPage />}></Route>
          <Route path='' element=""></Route>
          <Route path='' element=""></Route>
          <Route path='' element=""></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
