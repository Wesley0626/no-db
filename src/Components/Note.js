import React, {Component} from 'react'
import axios from 'axios'

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
    console.log('hit')
    axios
    .post('/api/note', {note: this.state.note})
    .then(res => {
      console.log('WHY', res.data)
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
              <input value={this.state.note} name='note' onChange={this.handleChange} />
              <button onClick={() => this.addNote()}>Add Note</button>
            </div>
            ) : (
              <div onClick={this.toggleEdit}>Note{this.state.notes.note}</div>
      )}
      </div>
    )
  }
}

export default Note