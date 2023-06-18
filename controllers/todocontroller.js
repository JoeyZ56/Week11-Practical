const Todo = require('../models/todo')


exports.showIndex = async (req, res) => {
  try {
    const foundTodos = await Todo.find({})
    res.render('todos/index', {
      todos: foundTodos
    })
  } catch (error) {
    res.status(400).send({message: error.message})
  }
}
exports.createTodos = async (req, res) => {
  req.body.complete = false
  try{
    const todo = new Todo(req.body)
    await todo.save()
   
  } catch(error){
    res.status(400).json({message: error.message})
  }
}
exports.createForm = (req, res) => {
  res.render('todos/New')
}

exports.showTodos = async (req, res) => {
  try {
    const foundTodo = await Todo.findOne({_id: req.params.id})
        res.render('todos/show', {
            todos: foundTodo
        })
  } catch (error) {
    res.status(400).send({message: error.message})
  }
}

exports.updateTodos = async (req, res) => {
  try{
    const updates = Object.keys(req.body)
    const todo = await todo.findOne({ _id: req.params.id })
    updates.forEach(update => todo[update] = req.body[update])
    await todo.save()
    res.json(todo)
  }catch(error){
    res.status(400).json({message: error.message})
  }
}

exports.deleteTodos = async (req, res) => {
  try{
    await req.todo.deleteOne()
    res.json({ message: `Task has been deleted` })
  }catch(error){
    res.status(400).json({message: error.message})
  }
}

exports.allTodos = async (req, res) => {
    try {
        await req.todo.allTodos()
        res.json()
    } catch (error) {
        res.satus(400).json({ message: error.message })
    }
}

