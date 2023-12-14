if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

// import dependencies
const express = require("express");
const cors = require('cors')
const connectToDb = require('./config/connectToDb')
const todosControllers = require('./controllers/todosController')

// create express app
const app = express()

app.use(express.json())
app.use(cors())

connectToDb()

// Routing

// todos Route
app.get('/todos', todosControllers.fetchTodos)
app.get('/todos/:id', todosControllers.fetchTodo)
app.post('/todos', todosControllers.createTodo)
app.put('/todos/:id', todosControllers.updateTodo)
app.delete('/todos/:id', todosControllers.deleteTodo)

// start our server
app.listen(process.env.PORT)