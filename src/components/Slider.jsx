import React from 'react'
import { useState } from 'react'

function Slider() {
  
  const [length, setLength] = useState(1)
  
  return (
    <div className='flex flex-col'>
      <label className='text-white'>Quantiy ({length}) </label>
      <input type="range" min={1} max={10} value={length} onChange={(e) => setLength(e.target.value)} />
    </div>
  )
}

export default Slider
