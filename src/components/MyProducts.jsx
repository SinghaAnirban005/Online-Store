import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import service from '../appwrite/config.js'
// import del from "../components/delete.jpg"
import DeleteBtn from './DeleteBtn.jsx'
import Slider from './Slider.jsx'

function MyProducts() {

  // const product = useSelector((state) => state.cart)
  const [products, setProducts] = useState([])

  // const [items, setItems] = useState(1)

  useEffect(() => {

   const getCart = async () => {
    try {
     const posts = await service.getDocuments()
      
    if(posts) {
      setProducts(posts.documents)

    }
     
    } catch (error) {
      console.log("Error fetching documents ", error);
      throw error 
    }

   }

   getCart()
   
}, [products])

  return (
    <div>
      <div>
        <h1 className='text-white font-bold'>YOUR SHOPPING CART</h1>
      </div>

      <ul className='text-white'>
        <div className='mt-10'>
          {products.map((item) => (
            <li key={item.$id} className='text-white flex justify-center'>

              <div className='flex justify-between border-4 m-4 p-10 w-[800px] border-white rounded-2xl'>

              <div className='flex mr-2'>
                <img className='rounded-xl h-40 w-30' src={item.image} alt='image' />
 
              </div>   

              <div className='text-white flex flex-col ml-4 p-4'>
                <p className='text-xl font-bold'>{item.title}</p>
                <p className='mt-10 text-lg font-medium'>₹ {item.price}</p>
              </div>

              <div className='flex flex-col justify-between'>

               <div>
                <DeleteBtn product={item} />
               </div>

              <div className='flex'>
                <Slider product={item} />
              </div>

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
