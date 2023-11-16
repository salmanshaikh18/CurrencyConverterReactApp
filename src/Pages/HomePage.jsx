import { useState } from 'react'
import InputBox from '../Components/InputBox'
import useCurrencyInfo from '../hooks/useCurrencyInfo'

const HomePage = () => {
 
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')
  const [selectCurrency, setSelectCurrency] = useState('USD')

  const swap = () => {
    setFrom(to)
    setTo(from)
  }

  // const currencyInfo = useCurrencyInfo('From')

  return (
    <div className='h-[100vh] w-[100vw] bg-slate-600 text-[#fff] flex flex-col items-center'>
        <h1 className='text-green-500 text-3xl mb-[3.5rem] mt-10 font-bold '>Currency Coverter</h1>
        <div className='bg-gray-400 h-[55vh] w-[90vw] rounded-lg 2xl:w-[40%] xl:w-[50%] lg:w-[60%] md:w-[70%] sm:w-[80%] flex flex-col justify-center items-center pr-4 pl-5'>
            <InputBox label="From" amount={amount} selectCurrency={from} />
            <button className='text-center bg-green-500 p-2 pl-5 pr-5 rounded-lg z-10 m-[-32px] hover:bg-green-800 transition ease-in-out duration-500' onClick={swap}>Swap</button>
            <InputBox label="To" selectCurrency={to} />
            <div className='flex justify-center items-center m-3 w-[100%]'>
                <button className='text-center bg-green-500 rounded-lg p-2 w-[100%] transition ease-in-out duration-500 hover:bg-green-800'>Convert {from} to {to}</button>
            </div>
            
        </div>
    </div>
  )
}

export default HomePage