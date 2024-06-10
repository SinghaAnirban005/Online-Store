import React from 'react'

function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className='border-2 border-white mt-10'>
      <p className='text-white'>
      © {year} All Rights Reserved by Anirban Singha
      </p>
    </div>
  )
}

export default Footer
