import React from 'react'
import { useState, useEffect } from 'react'
import service from "../appwrite/config.js"
import { useDispatch } from 'react-redux'

function Slider({product}) {
  
  const [length, setLength] = useState(1)
  const dispatch = useDispatch()

    useEffect(() => {
     try {
       const res = async() => {
         const response = await service.updateDocumentAttribute(product, {
          Quantity: parseInt(length)
         })

         dispatch(response)
 
         if(response ) {
           console.log("Updated attributes :: ");
         }
       } 


       res()
     } catch (error) {
        console.log("Failed to update attribute :", error);
     }  

     
    }, [length])

  return (
    <div className='flex flex-col'>
      <label className='text-white'>Quantiy ({length}) </label>
      <input type="range" min={1} max={10} value={length} onChange={(e) => setLength(e.target.value)} />
    </div>
  )
  
}

export default Slider
