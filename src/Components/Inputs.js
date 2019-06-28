import React from 'react'
import './inputs.css'


function Inputs(props){
  return(
    <div className='inputs'>
    <input className="input" placeholder="item" value={props.item} name="item" onChange={props.handleChange} />
    <input className="input" placeholder="cost" value={props.cost} name="cost" onChange={props.handleChange} />
    <input className="input" placeholder="True or False" value={props.necessity} name="necessity" onChange={props.handleChange} />
    <button className="button" onClick={() => props.addItem()}>Add Item!</button>
  </div>
  )
}

export default Inputs