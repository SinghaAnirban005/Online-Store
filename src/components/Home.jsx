import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addToCart } from "../store/authSlice.js"
import service from '../appwrite/config.js'

function Home() {

  const [products, setProducts] = useState([])

  const active = useSelector((state) => state.userStatus)


  useEffect( () => {
   const response = fetch('https://fakestoreapi.com/products?limit=20')       
   
        response
        .then(res => res.json())
        .then((item) => setProducts(item))
           
  }, [])

  const dispatch = useDispatch()

  const handleCart = async() => {
    
    try {

      const data = {
        userId: user.$id,
        product_Id: products.id,
        quantity
      }
      console.log(data);
      const response = await service.addProductToCart(data)

      return response

    } catch (error) {
      throw error
    }

  }


  return active ? (
    <div className='flex flex-col mt-16'>
      <div className='mb-5'>
        <marquee className="text-white font-bold">WELCOME TO SINGHA'S COLLECTION</marquee>
      </div>

      <ul className='flex flex-wrap justify-between'>
        {products.map((product) => (

          <li key={product.id} className='flex justify-center h-96 w-72 border-4 rounded-2xl border-white m-12 cursor-pointer'>
            <div className='flex flex-col justify-center'>

            <div className='flex justify-center mb-4'>
            <img className='rounded-lg h-24 w-24' src={product.image} alt={product.description} />
            </div>

            <div className='mb-2'>
              <p className='text-white px-4'>{product.title}</p>
            </div>

            <div className='mb-2 mt-2'>
              <p className='text-white'>₹ {parseInt(product.price)}</p>
            </div>

            <div className='flex flex-wrap justify-center'>
            <button className='text-white border-2 border-orange-600 hover:bg-slate-600 mr-2 p-2 rounded-lg'>
              BUY
            </button>

            <button  type='submit' className='text-white border-2 border-orange-600 hover:bg-slate-600 ml-2 p-2 rounded-lg' onClick={handleCart}>
              ADD TO CART
            </button>
            </div>
            </div>

          </li>
        ))}
      </ul>
    </div>
  ) : (

    <div>
      <h1 className='text-white'>YOU NEED TO LOGIN FIRST</h1>
    </div>

  )

}

export default Home
