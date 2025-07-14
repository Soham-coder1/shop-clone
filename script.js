const express = require('express')
const path = require('path')
const app = express()
const port = 3001

app.use(path.join(--dirname,"public"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//app.get('/about', (req, res) => {
  //res.send('this is an about page!')
//})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
})

app.use((req, res) => {
  res.status(404).send('404 not found!')
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
