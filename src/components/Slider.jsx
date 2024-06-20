import React from 'react'
import { useState, useCallback, useEffect } from 'react'
import service from "../appwrite/config.js"
import { useDispatch } from 'react-redux'  

function Slider({product}) {
  
  const [length, setLength] = useState(1)
  const dispatch = useDispatch()

  const handleChange = useCallback((e) => {
    
     try {
      // Problem here is that length change takes delay ... Need to resolve
      setLength(e.target.value)

      const res = async() => {
      
      const response = await service.updateDocumentAttribute(product, 
        {
          Quantity: parseInt(length)
        })
         
      if(response) {
          console.log("Updated attributes :: ");
      }
      
      dispatch(response)

    } 

      res()

     } catch (error) {
        console.log("Failed to update attribute :", error);
     }  

     
    }, [length])

    // useEffect(() => {
    //   try {
    //     const func = async() => {
    //       const originalLength = await service.getDocument(product)
          
    //       if(!originalLength) {
    //         console.log("Not able to retrieve details");
    //       }
  
    //       console.log(originalLength);
    //     }

    //     func()

    //   } catch (error) {
    //     console.log("ERROR WHILE GETTING DOCUMENT:: ", error);
    //     throw error
    //   }

    // }, [length])


  return (
    <div className='flex flex-col'>
      <input type="range" min={1} max={10} value={length} onChange={handleChange} />
    </div>
  )
  
}

export default Slider
