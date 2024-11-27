import './App.scss'
import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import { PackagesPage } from './Pages/PackagesPage/PackagesPage'
import { SearchResultPage } from './Pages/SearchResultPage/SearchResultPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PackagesPage />}></Route>
          <Route path='/experience' element={<SearchResultPage />}></Route>
          <Route path='' element=""></Route>
          <Route path='' element=""></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
