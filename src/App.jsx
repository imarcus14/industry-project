import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useState } from 'react'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={""}></Route>
          <Route path='' element=""></Route>
          <Route path='' element=""></Route>
          <Route path='' element=""></Route>
          <Route path='' element=""></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
