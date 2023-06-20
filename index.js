const express = require('express');
require('dotenv').config()
require('./config/db')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: "Hello World"})
})
app.listen(3001, () => console.log("serveur running on port 3001"));