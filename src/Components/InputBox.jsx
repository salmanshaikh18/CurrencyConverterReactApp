

const InputBox = () => {
    return (
        <div className="bg-gray-300 rounded-lg h-[35%] w-[100%] mr-5 ml-5 m-4 flex p-2 justify-between items-center">
            <div className="flex flex-col text-black w-[50%]">
                <label htmlFor="">From</label>
                <input className="w-[100%] rounded p-2 border-none outline-none" type="text" placeholder="Amount.."/>
            </div>
            <div className="text-black w-[50%] text-right">
                <p>Currency Type</p>
                <select className="bg-gray-100 rounded-lg p-1 w-[70%] border-none outline-none">
                    <option value="">1</option>
                </select>
            </div>
        </div>
    )
}

export default InputBox