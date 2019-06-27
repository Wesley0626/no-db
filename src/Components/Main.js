import React, {Component} from 'react'
import axios from 'axios'
import List from './List'
import './main.css'


class Main extends Component{
  constructor(){
    super()
      this.state ={
        groceryList: [],
        item: '',
        cost: 0, 
        necessity: ''
     }
  }

  componentDidMount(){
    axios.get('/api/grocery')
    .then(res => {
      this.setState({groceryList: res.data})
    })
    .catch(err => {
      console.log('Not today Satan', err)
    })
  }

  addItem = () => {
    axios.post('/api/grocery', {
      item: this.state.item, 
      cost: this.state.cost, 
      necessity: this.state.necessity
    })
    .then(res => {
      console.log('response', res)
      this.setState({groceryList: res.data, item: '', cost: 0, necessity: ''})
    })
    .catch(err => console.log("You shall NOT PASS", err))
  }

  editItem = (item, cost, necessity, id) =>{
    axios.put(
      `/api/grocery/${id}?newItem=${item}?newCost=${cost}?newNecessity=${necessity}`
    )
    .then(res => {
      this.setState({groceryList: res.data})
    })
    .catch(err => console.log('I\'ve got a feeling were not in Kansas anymore', err))
  }

  handleChange = e => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }
  
  handleDelete = id => {
    axios.delete(`/api/grocery/${id}`)
    .then(res => {
      this.setState({groceryList: res.data, item: '', cost: 0, necessity: ''})
    })
    .catch(err => {
      console.log("Fasten your seatbelts. I'ts going to be a bumpy night")
    })
  }

  render(){
    return(
      <div className="main">
        {this.state.groceryList.map(item => {
          return(
            <List
            key={item.id}
            fullItem={item}
            edit={this.editItem}
            delete={this.handleDelete}
            />
          )
        })
      }
        <div className='inputs'>
          <input placeholder="item" value={this.state.item} name="item" onChange={this.handleChange} />
          <input placeholder="cost" value={this.state.cost} name="cost" onChange={this.handleChange} />
          <input placeholder="True or False" value={this.state.necessity} name="necessity" onChange={this.handleChange} />
          <button onClick={() => this.addItem()}>Add Item!</button>
        </div>
      </div>
    )
  }
}


export default Main