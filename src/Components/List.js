import React, {Component} from 'react'
import axios from 'axios'
import Note from './Note'

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
    console.log(this.props)
    let {fullItem} = this.props
    let {editing, item, cost,} = this.state
    return(
      <div>
        {editing? (
          <div>
            <input value={item} onChange={this.handleChange} name='item'/>
            <input value={cost} onChange={this.handleChange} name="cost" />
          </div>
        ) : (
          <div>
            <p>{item}</p>
            <p>{cost}</p>
          </div>
        )}

        {editing? (
           <button onClick={this.saveChanges}>Save</button>
        ) : (
          <button onClick={this.toggleEdit}>Edit</button>
        )}
        <button onClick={() => this.props.delete(this.props.fullItem.id)}>Delete item</button>
        <Note />
      </div>
    )
  }

}


export default List