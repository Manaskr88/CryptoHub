import React, { useContext } from 'react'
import arrow from '../../assets/arrow_icon.png'
import './Navbar.css'
import { Context } from '../../Context/Context'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const {setCurrency} = useContext(Context)

  const currencyHandle = (event)=>{  // whenever we will choose different currency it will generate another request , then it will update currency 
    
    switch (event.target.value){

      case "usd":{
        setCurrency({name:"usd" , symbol:"$"})  
        break;
      }
      case "eur":{
        setCurrency({name:"eur" , symbol:"€"})
        break;
      }

      case "inr":{
        setCurrency({name:"inr" , symbol:"₹"})  // 
        break;
      }

      default:{
        setCurrency({name:"usd" , symbol:"$"})
        break
      }
    }

  }
  return (
    <div className='navbar'>

         <Link to={'/'}><h2>GrowForYou</h2> </Link>

        <ul>
            <Link to={'/'}> <li>Home</li> </Link>
            <li>Pricing</li>
            <li>Feature</li>
            <li>Blog</li>
        </ul>

        <div className="right">
            <select onChange={currencyHandle}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>

            </select>

            <button>Sign up <img src={arrow}  /></button>
            

        </div>

      
    </div>
  )
}

export default Navbar
