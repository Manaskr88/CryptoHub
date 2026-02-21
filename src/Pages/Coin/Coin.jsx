import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { Context } from '../../Context/Context';
// import Chart from '../../Components/Chart/Chartt';
// import Chartt from '../../Components/Chart/Chartt';
import Linechart from '../../Components/Chart/Linechart';

const Coin = () => {

  const {coinId} = useParams();  // from routes 
  const {currency} = useContext(Context)  
  
  const[coinData , setCoinData] = useState()

  const [chart , setChart] = useState([]) // for chart
  


  const fetchCoinData = async ()=>{

    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-ipPfEeF77i3W3yXgwRzwNkjz'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))  // setCoin me store kiya 
      .catch(err => console.error(err));
  }



   // for chart data 
  const fetchChart = async ()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-ipPfEeF77i3W3yXgwRzwNkjz'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=15&interval=daily`, options)
      .then(response => response.json())
      .then(response => setChart(response))
      .catch(err => console.error(err));
  }



  useEffect(()=>{
    fetchCoinData()
    fetchChart()   // called chart function

  },[currency])



  if(coinData && chart ){ // agr dono hue toh div dikhega wrna spin hota rhega 

    return (
      <div className='coin'>
  
          <div className="coin-name">
            <img  src={coinData.image.large} />
            <p><b>{coinData.name} ({coinData.symbol.toUpperCase()}) </b></p>

          

          </div>

          <div className="coin_chart">
            <Linechart chart={chart} />
          </div>


        
           <div className="coin_info">
            <ul>
              <li className='text'>Crypto Market Rank</li>
              <li>{coinData.market_cap_rank}</li>
            </ul>
            <ul>
              <li className='text'>Price</li>
              <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
            </ul>

            <ul>
              <li className='text'>Market Cap</li>
              <li>{currency.symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
            </ul>

            <ul>
              <li className='text'>High 24 Hour</li>
              <li>{currency.symbol}{coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
            </ul>

            <ul>
              <li className='text'>Low 24 Hour</li>
              <li>{currency.symbol}{coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
            </ul>

           </div>
      </div>


    )
  }

  else{

    return (

    <div className='spinner'>
  
          <div className="spin">
           
          </div>
        
      </div>
    )


  }

}

export default Coin
