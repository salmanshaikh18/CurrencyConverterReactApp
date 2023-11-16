import { useEffect, useState } from "react"


const useCurrencyInfo = (currency) => {

  const [data, setData] = useState({})

  const getData = async () => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => console.log(response.json))
  }

  useEffect(() => {
    getData()
  }, [])

}

export default useCurrencyInfo