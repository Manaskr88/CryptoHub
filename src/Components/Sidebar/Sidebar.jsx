import React, { useState } from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import menu from '../../assets/menu.png'
import not from '../../assets/notification.png'



const Sidebar = () => {
    const [extend, setExtend] = useState(false)

    return (


        <div className='m'>
            <div className='sidebar '>
                <div className="top">

                    {<img onClick={() => setExtend(prev => !prev)} className='menu' src={menu} />   /* use button to sidebar */}



                    {extend ?
                        <div className="recent">
                           <a href="/"> <p className='recent-title'>Home</p> </a>
                            <p className='recent-title'>Pricing</p>
                            <p className='recent-title'>Feature</p>
                            <p className='recent-title'>Blog</p>




                        </div> : null}



                </div>


            </div>
        </div>
    )
}

export default Sidebar
