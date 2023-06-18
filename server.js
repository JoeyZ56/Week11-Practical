require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => console.log('Mongo is beating my ass'))

app.listen(PORT, () => {
    console.log(`this has felt like ${PORT} hours`)
})