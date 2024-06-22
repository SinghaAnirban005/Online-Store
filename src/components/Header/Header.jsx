import React from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import Logout from './Logout'
import lion from "../Header/lion.jpg"

function Header() {

  const authStatus = useSelector((state) => state.userStatus)

  const navItems = [
    {
      name: "Home",
      slug: "/",
      status: authStatus
    },

    {
      name: "My Products",
      slug: "/my-products",
      status: authStatus
    },

    {
      name: "Login",
      slug: "/login",
      status: !authStatus
    },

    {
      name: "SignUp",
      slug: "/signup",
      status: !authStatus
    },

  ]

  const navigate = useNavigate()

 
return (
    <div className='flex justify-between'>
      <div>
      <h2 className='text-white cursor-pointer ml-2' onClick={() => navigate("/")}>
        <img className='rounded-xl h-16 w-14' src={lion} alt='logo' />
      </h2>
      </div>

      <div>
        <ul className='flex cursor-pointer'>
        {
          navItems.map((item) => item.status ? (
            <div>
             
            <li key={item.name} className='text-white mr-4 hover:text-lime-400' onClick={() => navigate(item.slug)}>
              {item.name}
            </li> 
             
            </div>
          ) : null
        ) 
        }
          {authStatus && (
              <li className='font-bold font-sans text-white'>
                <Logout />
              </li>
            )}
        </ul>

        <div className='flex items-center justify-center'>
          <h1 className='text-white'>SINGHA'S 99 CLUB</h1>
        </div>
      </div>
    </div>

)
}

export default Header
