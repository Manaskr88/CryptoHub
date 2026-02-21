import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Coin from './Pages/Coin/Coin'
import Footer from './Components/Footer/Footer'
import Sidebar from './Components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className='app'>

      <Navbar />
      <Sidebar/>
      <Routes>

        <Route path='/' element={<Home /> } />
        <Route path='/coin/:coinId'  element={<Coin /> } />
      </Routes>

      
      <Footer/>

    </div>
  )
}

export default App
