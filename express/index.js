const express = require('express')

const cros = require('cors')

const app = express()

app.use(cros())

app.use(express.urlencoded({extended:false}))

app.post('/tracker',(req, res) => {
  console.log(req.body)

  res.send(200)
})

app.listen(9001,() => {
  console.log('success 9001')
})