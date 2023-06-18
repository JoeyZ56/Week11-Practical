const request = require('supertest')
const mongoose = require('mongoose')
const { mongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app')
const Todo = require('../models/todo')
const { describe } = require('test')
let mongoServer

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
}) 

afterAll(async () => {
    await mongoose.connection.close()
    mongoServer.stop()
    ServerApiVersion.close
})
describe('Test the todo endpoints', () => {
    test('It should create a new todo', async () => {
        const rsponse = await request(app)
        .post('/todos')
        .send({ title: 'clean kitchen', description: 'clean the dishes and mop the floors', date: 'wednesday, june 14th' })
    expect(response.statuscode).toBe(200)
    expect(response.body.todo.title).toEqual('clean kitchen')
    expect(response.body.todo.description).toEqual('clean the dishes and mop the floors')
    expect(response.body.todo.date).toEqual('wednesday, june 14th')
    })
    test('It should make a todo'), async () => {
        const todo =  new Todo({title: 'clean kitchen', description: 'clean the dishes and mop the floors', date: 'wednesday, june 14th'})
        await todo.save()
    }
})