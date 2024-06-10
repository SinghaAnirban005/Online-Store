import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import authService from '../appwrite/auth.js'
import Input from './Input'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice.js'
import { Link } from 'react-router-dom'

function SignUp() {

  // const data  = useSelector((state) => (
  //   state.userData
  // ))
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("")
  const dispatch = useDispatch()


  const registerUser = async (data) => {
    setError(" ")

    try {
      // dispatch(data)
      const response = await authService.createAccount({...data})

      // response.then((res) => {
      //   dispatch(res)
      // })

      if(response) {

        const userData = await authService.getCurrentUser()
        if(userData) {
          dispatch(login(userData))
          navigate("/")
        }

        else {
          console.log("Error while creating account..");
        }

      }

      // return response
      
    } catch (error) {
      setError(error.message)
      // throw error
    }
  }

  return (

    <div>
      {error && <div className='flex justify-center'>
        <p>{error}</p>
      </div>}
    
        <div className='flex justify-center'>
        <form onSubmit={handleSubmit(registerUser)} className='border-4 border-white mt-10 p-20 w-[500px] rounded-xl'>
      <div>
        <p className='text-white'>Already have an Account ?{" "}
          <Link to="/login">
          <span className='text-white hover:text-amber-400'>Sign In</span></Link>
        </p>

      </div>

      <Input
      label="Full-Name: "
      type="text"
      placeholder="Enter your Full Name: "
     
      {...register("fullname", {
          required: true,
        }
      )}
      />

      <Input
      label="Email : "
      type="email"
      placeholder="Enter your Email: "
      {...register("email", {
          required: true,
        }
      )}
      />


      <Input
      label="Password: "
      type="password"
 
      placeholder="Enter your Password: "
      {...register("password", {
          required: true,
          minLength: 6 ,
          maxLength: 20,
          // pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        }
      )}
      />

    <button type="submit" className='text-white border-4 border-orange-500 py-2 px-6 mt-6 hover:bg-slate-800 rounded-lg'>
      REGISTER
    </button>

    </form>

        </div>
      
    </div>

    
  )
}

export default SignUp
