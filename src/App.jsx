import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import  ExperienceIdPage  from './Pages/ExperienceIdPage/ExperienceIdPage'
import Footer from './components/Footer/Footer'
import { PackagesPage } from './Pages/PackagesPage/PackagesPage'
import { SearchResultPage } from './Pages/SearchResultPage/SearchResultPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PackagesPage />}/>
          <Route path='/experience' element={<SearchResultPage />}/>
          <Route path='/bundle/:id' element={<ExperienceIdPage/>}/>
          <Route path='' element=""></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
