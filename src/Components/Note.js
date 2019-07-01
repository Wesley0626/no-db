import React, {Component} from 'react'
import axios from 'axios'
import './note.css'

class Note extends Component{
  constructor(){
    super()
    this.state = {
      note:'',
      notes: [],
      editing: false
    }
  }

  handleChange = e => {
    let{name, value} = e.target
    this.setState({[name]: value})
  }

  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  saveChanges = () => {
    this.toggleEdit()

  }

  addNote = () => {
    axios
    .post('/api/note', {note: this.state.note})
    .then(res => {
      this.setState({notes: res.data, note: ''})
    })
    .catch(err => {
      console.log("You can't handle the truth!", err)
    })
    this.toggleEdit()
  }

  render(){
    let {editing, note} = this.state
    return(
      <div className="frank">
          {editing? (
            <div>
              <input className='noteInput' value={note} name='note' onChange={this.handleChange} />
              <button className='noteButton' onClick={() => this.addNote()}>Add Note</button>
            </div>
            ) : (
              <div onClick={this.toggleEdit}>{this.state.notes.note || "Note:"}</div>
      )}
      </div>
    )
  }
}

export default Note