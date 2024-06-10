import React , { useState} from 'react'
import Input from "../components/Input.jsx"
import { useForm } from "react-hook-form"
import authService from '../appwrite/auth.js'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice.js'
import { useNavigate } from 'react-router-dom'


function Login() {

  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const verify = async(data) => {

    setError("")

    try {
      console.log(data);

      
      const response = await authService.Login(data)

      if(response) {

      const userData = await authService.getCurrentUser()

      if(userData) {
          dispatch(login(userData))
          console.log("Account successfully created...");
          navigate("/")
        }

      }
      
    }
    
    catch (error) {
      setError(error.message) 
    }

  }

  return (
    <div>
    <div className='flex justify-center'>
    <h1 className='mt-5 text-lime-600 font-bold'>Welcome to Singha's Store</h1>
    </div>

      {error && <div className='flex justify-center'>
          <p className='text-white'>{error.message}</p>
        </div>}

    <div className='flex flex-wrap justify-center'>
    <form onSubmit={handleSubmit(verify)} className='border-4 border-white mt-10 p-20 w-96 rounded-xl' >
        <Input
        label="Email: "
        placeholder="Enter your Email "
        type="email"

        {...register("email", {
          required: true,
        }
        )}
        />

        <Input
        label="Password: "
        placeholder="Enter your Password "
        type="password"

        {...register("password", {
          required: true,
          minLength: 6,
          maxLength: 20
        })
        }
        />


        <div>
        <button className='text-white border-4 border-orange-500 py-2 px-6 mt-6 hover:bg-slate-800 rounded-lg' type='submit'>
          Login  
        </button>
        </div>

    </form>
    </div>

    </div>
  )
}

export default Login
