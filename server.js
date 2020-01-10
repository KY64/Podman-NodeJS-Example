const express = require('express'),
      app = express(),
      PORT = process.env.NODE_PORT

if (PORT == undefined) {
    console.log("Please define PORT")
    return
}

app.use(express.static(__dirname + '/'))
app.get('/', (req,res) => res.sendFile('index.html'))

app.listen(PORT, () => console.log("Running on port", PORT))
