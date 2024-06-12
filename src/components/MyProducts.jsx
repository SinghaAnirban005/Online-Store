import React from 'react'
import { useSelector } from 'react-redux'

function MyProducts() {

  const product = useSelector((state) => state.cart)

  // const handleClick = () => {
  //   console.log(product);
  // }

  // const add = (id) => {
  //   const response = fetch(`https://fakestoreapi.com/products/${id}`)
    
  //   response        
  //     .then(res=>res.json())
  //     .then(json=>console.log(json))

  // }


  return (
    <div>
      <div>
        <h1 className='text-white'>YOUR SHOPPING CART</h1>
      </div>

      {/* <ul className='text-white'>
        <div className='mt-10'>
          {product.map((item) => (
            <li className='text-white flex justify-center'>

              <div className='flex justify-center border-4 m-4 p-6 w-[800px] border-white rounded-2xl'>


              <div className='flex mr-4'>
                <img className='rounded-xl h-44 w-30' src={item.image} alt='image' />
              </div>
               

              <div className='text-white flex flex-col ml-4'>
                <p className='text-xl font-bold'>{item.title}</p>
                <p className='mt-10 text-lg font-medium'>{item.price}</p>
              </div>

            
            </div>

            </li>
          ))}
        </div>
      </ul> */}
    </div>
  )
}

export default MyProducts
