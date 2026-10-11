import React, { useEffect } from 'react'
import { useState } from 'react'

const Brands = () => {
  const [txt , setTxt] = useState(0)



  function Message(){
    setTxt( prompt('Enter number'))
  }
  
  return (
    <div className='w-full h-screen'>
       <button onClick={Message}>click</button>
       <p>{txt}</p>
    </div>
  )
}

export default Brands