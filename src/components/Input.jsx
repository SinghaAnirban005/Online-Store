import React from 'react'
import { useId } from 'react'


function Input({
  className="",
  label,
  type="text",
  ...props
}, ref) 
{

  const id = useId()

  return (
    <div>
      {label && 
      <label
      className='inline-block mb-1 pl-1 text-white'
      htmlFor={id}
     >
      {label}
    </label>}

    <input
    type={type}
    id={id}
    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
    {...props}
    ref={ref}
    />
      
    </div>
  )
}

export default React.forwardRef(Input)
