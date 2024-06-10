import React from 'react'
import authService, { auth } from '../../appwrite/auth.js'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'


function Logout() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
   try {
    const response = await authService.Logout()

    if(response) {
      // const userData = await authService.getCurrentUser()
      // console.log(userData);
        dispatch(logout())
        navigate("/")
      
    }
   } catch (error) {
      console.log(error);
   }
  }

  return (
    <div>
      <button onClick={handleLogout} className='hover:text-red-500'>
        LOGOUT
      </button>
    </div>
  )
}

export default Logout
