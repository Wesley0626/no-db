const groceries = [{
  item:"Milk",
  cost: 2,
  necessity: true,
  id: 1
}, 
{
  item:"Bananas",
  cost: 3,
  necessity: true,
  id: 2
}, 
{
  item:"Cereal",
  cost: 3,
  necessity: true,
  id:3
}]
let id= 4

module.exports = {
  allGroceries(req, res) {
    res.status(200).send(groceries)
  },
  updateGroceries(req, res){
    let {id} = req.params
    let {newItem, newCost, newNecessity} = req.query
    let index = groceries.findIndex(item => item.id === parseInt(id))
    groceries[index].item = newItem || groceries[index].item
    groceries[index].cost = +newCost || groceries[index].cost
    groceries[index].necessity = newNecessity || groceries[index].necessity
    res.status(200).send(groceries)
  },
  addGrocery(req, res){
    let {item, cost, necessity} = req.body
    let newItem = {
      item, 
      cost: +cost,
      necessity,
      id,
    }
    id++
    groceries.push(newItem)
    res.status(200).send(groceries)
  },
  deleteGrocery(req, res){
    let {id} = req.params
    let index = groceries.findIndex(item => item.id === parseInt(id))
    index !== -1 && groceries.splice(index, 1)
    res.status(200).send(groceries)
  }
}