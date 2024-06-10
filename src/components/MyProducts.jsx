import React from 'react'
import { useSelector } from 'react-redux'

function MyProducts() {

  const product = useSelector((state) => state.cart)

  // const handleClick = () => {
  //   console.log(product);
  // }

  const add = (id) => {
    const response = fetch(`https://fakestoreapi.com/products/${id}`)
    
    response        
      .then(res=>res.json())
      .then(json=>console.log(json))


  }




  return (
    <div>
      <ul className='text-white'>
        <div>
          {product.map((item) => (
            <li className='text-white'>
              {item.title}
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default MyProducts
