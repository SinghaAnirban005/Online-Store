import React from 'react'
import { useDispatch } from 'react-redux';
import service from '../appwrite/config.js';

function AddToCartBtn({product}) {

  const dispatch = useDispatch()
  
  const handleAddToCart = () => {

    const cartItem = {
  
      id: product.id,
      title: product.title,
      price: parseInt(product.price),
      image: product.image,
      userId: product.$id, // Replace with actual user ID

    };

    
    const ser = service.addToCartAsync(cartItem)
    dispatch(ser)
    // dispatch ser ...
  }

  return (
    <div>
      <button className='text-white border-2 border-orange-600 hover:bg-slate-600 ml-2 p-2 rounded-lg' onClick={handleAddToCart}>
        ADD TO CART
      </button>
      
    </div>
  )
}

export default AddToCartBtn