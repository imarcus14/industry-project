import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { PackagesPage } from './Pages/PackagesPage/PackagesPage'

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
