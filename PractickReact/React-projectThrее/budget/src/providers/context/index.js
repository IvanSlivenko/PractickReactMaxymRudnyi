import { createContext } from "react";

const currency = {
    value: 'UAH',
    title:'гривня'
}

const CurrencyContext = createContext(currency); 

export default CurrencyContext;