import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import service from '../appwrite/config.js'

function MyProducts() {

  // const product = useSelector((state) => state.cart)
  const [products, setProducts] = useState([])

  // useEffect(() => {

  //   product.map((item) => products.push(item))
    
  // }, [])

  useEffect(() => {

   const getCart = async () => {
    try {
     const posts = await service.getDocuments()
      
    console.log(posts);
    if(posts) {
      setProducts(posts.documents)
    }
     
    } catch (error) {
      console.log("Error fetching documents ", error);
      throw error 
    }

   }


   getCart()
   
}, [])

  return (
    <div>
      <div>
        <h1 className='text-white font-bold'>YOUR SHOPPING CART</h1>
      </div>

      <ul className='text-white'>
        <div className='mt-10'>
          {products.map((item) => (
            <li className='text-white flex justify-center'>

              <div className='flex justify-center border-4 m-4 p-6 w-[800px] border-white rounded-2xl cursor-pointer'>

              <div className='flex mr-4'>
                <img className='rounded-xl h-44 w-30' src={item.image} alt='image' />
              </div>   

              <div className='text-white flex flex-col ml-4'>
                <p className='text-xl font-bold'>{item.title}</p>
                <p className='mt-10 text-lg font-medium'>₹ {item.price}</p>
              </div>

            </div>

            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default MyProducts
