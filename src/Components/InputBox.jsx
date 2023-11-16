import { useId } from "react"


const InputBox = ({
    label,
    currencyOptions = [],
    selectCurrency='USD' ,
    amount,
    onAmountChange,
    amountDisable = false,
    onCurrencyChange,
    currencyDisable
}) => {

    const amountInputId = useId()

    return (
        <div className="bg-gray-300 rounded-lg h-[35%] w-[100%] mr-5 ml-5 m-4 flex p-2 justify-between items-center">

            <div className="flex flex-col text-black w-[50%]">
                <label htmlFor={amountInputId} className="text-gray-500 sm:text-xl sm:font-bold" >{label}</label>
                <input className="w-[100%] mt-3 rounded p-2 border-none outline-none mb-5 sm:text-lg"
                id={amountInputId}
                type="number" 
                placeholder="Amount.." 
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                disabled={amountDisable}
                />
            </div>

            <div className="text-black w-[50%] text-right">
                <label htmlFor={amountInputId} className="text-gray-500 sm:text-xl sm:font-bold" >Currency Type</label>
                <select className="bg-gray-100 rounded-lg p-1 text-lg w-[70%] border-none outline-none mb-5 mt-3"
                value={selectCurrency} 
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox