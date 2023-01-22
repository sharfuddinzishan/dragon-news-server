const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = process.env.PORT || 5000

const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('Hello')
})
app.get('/categories', (req, res) => {
    res.send(categories)
})



app.listen(port, () => { console.log('Dragon News Listen: ', port); })