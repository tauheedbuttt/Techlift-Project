require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// models
require('./backend/src/models/User')
require('./backend/src/models/Toll')

// routes
const authRoutes = require('./backend/src/routes/authRoutes');
const tollRoutes = require('./backend/src/routes/tollRoutes');

const app = express()
const port = process.env.PORT
const uri = process.env.MONGO_URI

mongoose.set('strictQuery', false);
mongoose.connect(uri, {
  useNewUrlParser: true,
  autoIndex: true
})
mongoose.connection.on('connected', () => {
  console.log('Connected to Mongo instance')
})
mongoose.connection.on('error', (error) => {
  console.error('Error connecting to Mongo instance', error)
})


if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
  const path = require("path");
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.use(cors())
app.use(bodyParser.json())
app.use('/api', authRoutes)
app.use('/api', tollRoutes)

app.get('/', (req, res) => res.send('Home'))

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})