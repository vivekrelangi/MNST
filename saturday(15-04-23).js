const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.json())

mongoose.connect('mongodb://127.0.0.1:27017/databasename')

const schema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
}, { collection: 'collectionname' });

const post = mongoose.model('collectionname', schema);

app.get('/collectionname', (req, res) => {
  post.find()
    .then((data) => {
      res.send(data)
    })
})

app.post('/', async (req, res) => {
  var data = {
    _id: req.body._id,
    name: req.body.name,
    email: req.body.email
  }
  const m = new post(data)
  m.save()
    .then((info) => {
      res.json(info)
    })
})

var server = app.listen(3000, () => {
  console.log("Server is Running")
})