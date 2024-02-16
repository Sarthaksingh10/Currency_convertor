import { useState } from "react";
import Extend from "./Extend";
import useCurrencyinfo from "./customHook/hook";
function App() {

  const [amount,setamount]=useState(0)
  const [From,setFrom]=useState("inr")
  const [To,setTo]=useState("usd")
  const [convertedamount,setconvertedamount]=useState(0)


  const currencyinfo=useCurrencyinfo(From)
  const options=Object.keys(currencyinfo)

  const swap=()=>{     /* functino to swap values */
    setFrom(To)
    setTo(From)
    setconvertedamount(amount)
    setamount(convertedamount)
  }

  const convert=()=>{
  setconvertedamount(amount*currencyinfo[To])}
  return (
    <>
      <div
        className="  h-screen w-screen bg-cover bg-no-repeat lazy flex justify-center items-center"
        style={{ backgroundImage: `url("../src/assets/currencymap.jpg")`}}
      >
        <div className="h-2/4 w-2/4 bg-black opacity-80 flex flex-col justify-center rounded-xl">
          <h1 className="text-white text-4xl w-full text-center relative bottom-6">Currency Convertor</h1>
          <Extend where="From"
                Amount={amount}
                currencyoptions={options}
                onCurrencychange={(currency)=>setFrom(currency)}
                selectcurrency={From}
                onAmountchange={(amount)=>setamount(amount)}
          />
           <Extend where="To"
            Amount={convertedamount}
            currencyoptions={options}
            onCurrencychange={(currency)=>setTo(currency)}
            selectcurrency={To}
            amountdisable
           />
           <button className="bg-blue-500 h-16 w-3/4 text-3xl rounded-md relative left-24" onClick={convert}>Convert {From} to {To}</button>
        </div>
         <div className="relative right-96 bottom-2">
          <button className="bg-blue-600 cursor-pointer font-serif text-xl text-white p-1 h-10 rounded-md relative right-8 top-1" onClick={swap}>Swap</button>
         </div>
        
         
      </div>
    </>
  );
}

export default App;
