import InputBox from '../Components/InputBox'

const HomePage = () => {
  return (
    <div className='h-[100vh] w-[100vw] bg-slate-600 text-[#fff] flex flex-col items-center'>
        <h1 className='text-green-500 text-3xl mb-[3.5rem] mt-10 font-bold '>Currency Coverter</h1>
        <div className='bg-gray-400 h-[55vh] w-[90vw] rounded-lg 2xl:w-[40%] xl:w-[50%] lg:w-[60%] md:w-[70%] sm:w-[80%] flex flex-col justify-center items-center pr-4 pl-5'>
            <InputBox label="From" />
            <button className='text-center bg-green-500 p-2 pl-5 pr-5 rounded-lg z-10 m-[-32px] hover:bg-green-800 transition ease-in-out duration-500'>Swap</button>
            <InputBox label="To" />
            <div className='flex justify-center items-center m-3 w-[100%]'>
                <button className='text-center bg-green-500 rounded-lg p-2 w-[100%] transition ease-in-out duration-500 hover:bg-green-800'>Convert USD to INR</button>
            </div>
            
        </div>
    </div>
  )
}

export default HomePage