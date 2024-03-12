import {useEffect, useState} from "react"

/* Creating a custom hook using react's useState and useEffect */
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        
    }, [currency,data])
   
    return data
}

export default useCurrencyInfo;