import React from 'react'
import { useState, useCallback, useEffect } from 'react'
import service from "../appwrite/config.js"
import { useDispatch } from 'react-redux'  

function Slider({product}) {
  
  const [length, setLength] = useState(1)
  const dispatch = useDispatch()

  // useEffect(() => {
    
  //   setLength(length)

  // }, [length, setLength])

  const handleChange = async (e) => {
   
    
  try {
     // This helps to prevent the delay in slider 
    const newLength = e.target.value 
    setLength(newLength)

    // Problem here is that length change takes delay ... Need to resolve -- > Resolved
    
    const response = await service.updateDocumentAttribute(product, 
        {
          Quantity: parseInt(newLength)
        })
         
    if(response) {
      console.log(":: Updated quantity attribute ::");
      dispatch(response)
    }

     } catch (error) {
        console.log("Failed to update attribute :", error);
     }  

     
    }


  return (
    <div className='flex flex-col'>
      <input type="range" min={1} max={10} value={length} onChange={handleChange} />
    </div>
  )
  
}

export default Slider
