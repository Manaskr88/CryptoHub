import { createContext, useContext, useEffect, useState } from "react";


export const Context = createContext()



const ContextProvider = (props) => {

    const [coin, setCoin] = useState([])  // coin data 
    const [currency, setCurrency] = useState({  // currency data 
        name: "usd",  // set kiya h usd
        symbol: "$"
    })



    const fetchCoin = async () => {   // copied from coingeckoapi

        const options = { method: 'GET',  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-ipPfEeF77i3W3yXgwRzwNkjz'}}// api from coingecko

      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setCoin(response))  // setCoin me response de diya 
            .catch(err => console.error(err));

    }

    useEffect(()=>{
           fetchCoin()
    },[currency])  // jab jab currency change hoga api phir se fetch hoga 


    // const API = CG - ipPfEeF77i3W3yXgwRzwNkjz



    const contextValue = {  // value pass krdi h 

        coin ,
        setCoin,
        currency,
        setCurrency




    }

    return (
        <Context.Provider value={contextValue}>

            {props.children}
        </Context.Provider>
    )

}


export default ContextProvider


