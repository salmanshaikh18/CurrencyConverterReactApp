import React from 'react'
import InputBox from '../Components/InputBox'

const HomePage = () => {
  return (
    <div className='h-[100vh] w-[100vw] bg-slate-600 text-[#fff] flex justify-center items-center'>
        <div className='bg-gray-400 h-[55vh] w-[90vw] rounded-lg 2xl:w-[40%] xl:w-[50%] lg:w-[60%] md:w-[70%] sm:w-[80%] flex flex-col justify-center items-center'>
            <InputBox />
            <button className='text-center bg-green-500 p-2 pl-5 pr-5 rounded z-10 m-[-32px]'>Swap</button>
            <InputBox />
            <div className='flex justify-center items-center m-3'>
                <button className='text-center bg-green-500 rounded p-2 w-[100%] '>Convert USD to INR</button>
            </div>
            
        </div>
    </div>
  )
}

export default HomePage