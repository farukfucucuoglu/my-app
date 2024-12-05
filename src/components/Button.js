import React from 'react'
import './Button.css'


function Button({symbol,color,handeClick}) {
    return(
        <div 
        onClick={()=>handeClick(symbol)} 
        className='button-wrapper'style={{backgroundColor:color}}>{symbol}</div>
    )
}
export default Button