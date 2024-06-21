import React from 'react'
import {Logo} from "./assets/index"
function App() {
  return (
    <div className='bg-black w-full h-screen flex text-white flex-col items-center justify-center'>
        <img src={Logo} className='w-52' />
        <p className='mt-5 text-sm'>Author: Socheang Dev</p>
    </div>
  )
}

export default App