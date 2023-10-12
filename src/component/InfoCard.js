import React from 'react'
import './InfoCardstyle.css'
const InfoCard = () => {
    const P= Math.round(Math.random());
  return (
    <div class='container'>
      
      <div id="heading">Try saying:</div> 
       <br/>
       <p id="message">
       Add {P? 'Income ' : 'Expense '}
       for Rs.{P ? '1000 ' : '500 '} 
        in category {P ? 'Salary ' : 'Bills '}
        for {P? 'Monday ': 'Tuesday '}...
        </p>
    </div>
  )
}

export default InfoCard
