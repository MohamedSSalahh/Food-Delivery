import React,{useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'



import LoginPopup from "../../components/LoginPopup/LoginPopup"
import "../../scss/globel.scss"

export default function Mainlayout() {
  const [showLogin , setShowLogin] = useState(false)
  return (
    <div>
      {showLogin?<LoginPopup setShowLogin = {setShowLogin}/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      </div>
      
      <main className='app'>
       <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
