const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

require('dotenv').config();
const port = process.env.PORT || 5000

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('Dragon News')
})
app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/categories/:id', (req, res) => {
    const id = req.params.id
    let getCatNews = []
    if (id == 08)
        getCatNews = news
    else
        getCatNews = news.filter(news => news.category_id == id)
    res.send(getCatNews)
})
app.get('/news', (req, res) => {
    res.send(news)
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id
    let selectedNews = []
    selectedNews = news.find(singleNews => singleNews._id == id)
    res.send(selectedNews)
})



app.listen(port, () => { console.log('Dragon News Listen: ', port); })