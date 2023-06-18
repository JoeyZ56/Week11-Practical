const express = require('express')
const router = express.Router()
const todocontroller = require('../controllers/todocontroller')


router.post('/', todocontroller.createTodos)
//router.post('/todos', todocontroller.allTodos)
router.put('/:id', todocontroller.updateTodos)
router.delete('/:id', todocontroller.deleteTodos)

router.get('/new', todocontroller.createForm)
router.get('/:id', todocontroller.showTodos)
router.get('/', todocontroller.showIndex)

module.exports = router