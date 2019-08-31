const express = require('express')
const app = express()

//---------------require('x') tries find index named file first-----------------
app.use('/api', require('./routes/api'))                                                                  
app.use('/', express.static(__dirname + '/public'))

app.listen(9700, () => {console.log("Server started on : https://localhost:9700/")})