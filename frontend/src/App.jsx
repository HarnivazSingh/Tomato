import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import Verify from './Pages/Verify/Verify.jsx'
import Myorders from './Pages/MyOrders/Myorders.jsx'

const App = () => {

  const [showLogin,setShowLogin]=useState(false);


  return (<>
  {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        < Route path='/' element={<Home/>}/>
        < Route path='/Cart' element={<Cart/>}/>
        < Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<Myorders/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
