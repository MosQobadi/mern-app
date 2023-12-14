const Todo = require('../models/todo')

const fetchTodos = async (req, res) => {
    const todos = await Todo.find()

    res.json({ todos: todos })
}

const fetchTodo = async (req, res) => {
    const todoId = req.params.id

    const todo = await Todo.findById(todoId)

    res.json({ todo: todo })
}

const createTodo = async (req, res) => {
    const { title, body } = req.body;
    // const title = req.body.title;
    // const body = req.body.body;

    const todo = await Todo.create({
        title,
        body
    })

    res.json({ todo })
}

const updateTodo = async (req, res) => {
    const todoId = req.params.id

    const { title, body } = req.body;


    await Todo.findByIdAndUpdate(todoId, {
        title,
        body
    })

    const todo = await Todo.findById(todoId)

    res.json({ todo })
}

const deleteTodo = async (req, res) => {
    const todoId = req.params.id;

    await Todo.deleteOne({ _id: todoId })

    res.json({ success: 'Todo Deleted' })
}

module.exports = {
    fetchTodos,
    fetchTodo,
    createTodo,
    updateTodo,
    deleteTodo
}