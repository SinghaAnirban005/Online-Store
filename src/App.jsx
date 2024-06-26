import React, { useState, useEffect } from 'react'
import './App.css'
import authService from './appwrite/auth.js'
import Header from './components/Header/Header'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { login, logout } from './store/authSlice.js'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function App() {

  const dispatch = useDispatch()

  // const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  // const active = useSelector((state) => state.userStatus)

  useEffect(() => {
    
   authService.getCurrentUser()
   .then((userData) => {
    if(userData) {
    
      dispatch(login({userData}))
      navigate("/")
    }

    else {
      dispatch(logout())
      navigate("/")
    }
    
   })
   .finally(() => setLoading(false))

    // if (user) {
    //   dispatch(login({
    //     email: user.email, 
    //     username: user.name
    //   }));

    //   setLoading(false)
     
    //   navigate("/")

    // }

    // else {

    //   dispatch(logout())  
    //   setLoading(false) 
    //   navigate("/")
    // }

  }, [])

  return loading ? 
    <div>
      <h1 className='text-white'>Loading .... </h1>
    </div>
   : 
  
      <div>
      <Header />
  
      <Outlet />
  
      <Footer />
      </div>
    
  

}

export default App
