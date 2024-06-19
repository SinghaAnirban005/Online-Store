import React from 'react'
import { useDispatch } from 'react-redux';
import service from '../appwrite/config.js';


function DeleteBtn({product}) {

  const dispatch = useDispatch()

  const handleDelete = async () => {
    try {
      console.log(product);
  
      const item = service.deleteDocument(product)
      dispatch(item)
      

    } catch (error) {
        console.log("Error while deleting the document ", error);
        throw error
    }

  }

  return (

    <button className='text-red-700 font-bold rounded-3xl h-10 p-2 bg-white hover:bg-slate-400' onClick={handleDelete}>
      Delete 
    </button>

  )
}

export default DeleteBtn
