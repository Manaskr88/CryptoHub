import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { Context } from '../../Context/Context'
import { Link } from 'react-router-dom'

const Home = () => {

 
    
    const { coin, currency } = useContext(Context)
    const [display, setDisplay] = useState([])


    const [input, setInput] = useState('')

    const inputHandler = (event) =>{

        setInput(event.target.value)  // inpput data will store here 

        if(event.target.value === ""){  // if input will clear then waaps purana data 
            setDisplay(coin)
        }


    }



    const searchHandler = async (event)=>{

        event.preventDefault();

      const coins =   await coin.filter((item)=>{    // search krne pe filter krega then uska name lowercase pe return krega 
            return  item.name.toLowerCase().includes(input.toLowerCase())  // woh chiz include krna chahitye jo humne input diya h 
        })

        setDisplay(coins)  // this will display filtered  item

    }


    
    useEffect(() => {

        setDisplay(coin)  // setDisplay will contain data of coin 

    }, [coin])  // coin change hone pe refresh


    return (
        <div className='home'>

            <div className="hero">
                <h1>Largest <br />Crypto MarketPlace </h1>

                <p>Welcome to the world's largest cryptocurrency marketplace. <br /> Sign up to explore more about cryptos</p>

                <form  onSubmit={searchHandler}>
                    <input list='coinlist' onChange={inputHandler} value={input} type='text' required placeholder='Search crypto' />

                   {/* search krne pe option  */}


                    <datalist id='coinlist'>
                        {coin.map((item , index)=>(
                            <option key={index} value={item.name} />

                        ))}
                    </datalist>


                    <button type='submit'> Search </button>
                </form>

            </div>



            <div className="table">
                <div className="layout">
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p className='high'>High 24</p>
                    {/* <p>Low 24</p> */}

                    <p >24H Change</p>
                    <p className='cap'>Marketcap</p>

                </div>

                {
                    display.slice(0, 20).map((item, index) => {

                        return (

                            <Link to={`/coin/${item.id}`} key={index} className="layout">

                                <p>{item.market_cap_rank}</p>

                                <div className="btc">
                                    <img  src={item.image} />
                                    <p > {item.name + "-" + item.symbol} </p>

                                </div>

                                <p>{currency.symbol} {item.current_price.toLocaleString()}</p>

                                <p className='high'>{item.high_24h}</p>

                                {/* <p>{item.low_24h}</p> */}
                                <p className={item.price_change_percentage_24h>0 ? "green" : "red" }
                                >{Math.floor(item.price_change_percentage_24h*100)/100}%</p>

                                <p>{currency.symbol}{item.market_cap.toLocaleString()}</p>




                            </Link>

                        )
                    })
                }


            </div>

            {/* <p>Copyright @ 2024, GrowForYou - All Right Reserved.</p> */}
        </div>
    )
}

export default Home
