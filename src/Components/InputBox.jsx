

const InputBox = ({
    label,
    currencyOptions = [],
    selectCurrency,
    amount,
    onAmountChange,
    amountDisable = false,
    onCurrencyChange
}) => {
    return (
        <div className="bg-gray-300 rounded-lg h-[35%] w-[100%] mr-5 ml-5 m-4 flex p-2 justify-between items-center">

            <div className="flex flex-col text-black w-[50%]">
                <label htmlFor="">{label}</label>
                <input className="w-[100%] rounded p-2 border-none outline-none" 
                type="number" 
                placeholder="Amount.." 
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                disabled={amountDisable}
                />
            </div>

            <div className="text-black w-[50%] text-right">
                <p>Currency Type</p>
                <select className="bg-gray-100 rounded-lg p-1 w-[70%] border-none outline-none"
                value={selectCurrency} 
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
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