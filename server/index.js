require('dotenv').config()
const express = require('express')
const ctrl = require('./controllers/groceryController.js')
const URL = '/api/grocery'
const {SERVER_PORT} = process.env
const CTRL = require('./controllers/noteController')
const noteURL = '/api/note'

const app = express()

app.use(express.json())

app.get(URL, ctrl.allGroceries)
app.put(`${URL}/:id`, ctrl.updateGroceries)
app.post(URL, ctrl.addGrocery)
app.delete(`${URL}/:id`, ctrl.deleteGrocery)

app.post(noteURL, CTRL.addNote)


app.listen(SERVER_PORT, () => {
  console.log(`Ninjas dueling to death on ${SERVER_PORT}`)
})