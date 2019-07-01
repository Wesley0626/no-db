import React, {Component} from 'react'
import Note from './Note'
import './list.css'

class List extends Component{
  constructor(props){
    super()
    this.state ={
      item: props.fullItem.item, 
      cost: props.fullItem.cost, 
      necessity: props.fullItem.necessity, 
      editing: false
    }
  }

  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  saveChanges = () => {
    this.toggleEdit()
    this.props.edit(this.state.item, this.state.cost, this.state.necessity, this.props.fullItem.id)
  }

  handleChange = e => {
    let{name, value} = e.target
    this.setState({[name]: value})
  }

  render(){
    let {editing, item, cost,} = this.state
    return(
      <main className='item'>
        {editing? (
          <div className="displayItems">
            <input className="editInputs" className="elements" value={item} onChange={this.handleChange} name='item'/>
            <input className="editInputs" className="element" value={cost} onChange={this.handleChange} name="cost" />
          </div>
        ) : (
          <div className="displayItems" id="displayItems">
            <p className="elements">{item}</p>
            <p className="element">{cost}</p>
          </div>
        )}
        <Note />
        <div className="postButtons">
        {editing? (
           <button className="list-buttons" onClick={this.saveChanges}>Save</button>
        ) : (
          <button className="list-buttons" onClick={this.toggleEdit}>Edit</button>
        )}
        <button className="list-buttons" onClick={() => this.props.delete(this.props.fullItem.id)}>Delete item</button>    
        </div>  
      </main>
    )
  }

}


export default List