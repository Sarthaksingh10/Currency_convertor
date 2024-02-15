import propTypes from "prop-types";
import { useId } from "react";

function Extend({
  where = "from",
  Amount,
  onAmountchange,
  onCurrencychange,
  currencyoptions = [],
  selectcurrency = "inr",
  amountdisable = false,
  currecydisable = false,
}) 
  
{
  const amountInputId=useId()
  return (
    <div className="h-20 w-3/4 bg-white rounded-md relative bottom-2 left-24 mt-8 p-2">
      <div className="flex justify-between">
        <label className="relative bottom-2 left-0" htmlFor={amountInputId}>{where}</label>
        <p className="top-0 bottom-4">Currency Type</p>
      </div>
      <div className="flex justify-between">
        <input
        id={amountInputId}
          type="number"
          className="h-8 w-16 relative top-3 left-0 border-black border-2"
          value={Amount}
          disabled={amountdisable}
          onChange={(e) =>
            onAmountchange && onAmountchange(Number(e.target.value)) 
          }
        />
        <select
          name="currency"
          id="Currency"
          className="h-8 w-16 relative top-3 right-0 border-black border-2"
          disabled={currecydisable}
          value={selectcurrency}
          onChange={(e) => onCurrencychange && onCurrencychange(e.target.value)}
        >
          {currencyoptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
Extend.propTypes = {
  where: propTypes.string,
};
Extend.propTypes = {
  Amount: propTypes.number,
};
Extend.propTypes = {
  onAmountchange: propTypes.number,
};
Extend.propTypes = {
  onCurrencychange: propTypes.string,
};
Extend.propTypes = {
  amountdisable: propTypes.bool,
};
Extend.propTypes = {
  currecydisable: propTypes.bool,
};
Extend.propTypes = {
  currencyoptions: propTypes.string,
};
Extend.propTypes = {
  selectcurrency: propTypes.string,
};
export default Extend;
