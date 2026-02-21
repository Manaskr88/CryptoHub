import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'




const Linechart = ({ chart }) => {

    const [dataa, setDataa] = useState([["Date", "Prices"]])

    useEffect(() => {

        let dataCopy = [["Date", "Prices"]]

        if (chart.prices) {  // agr chart ke prices hue 
            chart.prices.map((item) => {  // toh map krenge 
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]])// then push krenge us,e new date ko and readable format me 
            }) // also we removed year by slicing  

            
    setDataa(dataCopy)
}

    }, [chart])








return (
    <Chart className='green'
        chartType='LineChart'
        data={dataa}
        height="100%"
    />
)
}

export default Linechart



