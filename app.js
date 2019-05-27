const express = require('express')
const app = express()
const port = 1000
const sendParam = (req, res) => res.send(req.params)
app.get('/', (req, res) => res.send('Pagina Inicio'))
app.get('/login', (req, res) => res.send('Pagina de Login'))
app.get('/registro', (req, res) => {
    res.send('pagina de registro')
    console.log(res)

})
app.get('/user/:username', (req, res) => res.send(req.params))
app.get('/user/:username/lista', sendParam)
app.get('/user/:username/performance-survey', sendParam)
app.get('/user', (req, res) => res.send('Hi im user!'))
app.use(express.static('test'))

app.use((req, res, next) => res.status(404).send("u thought it was an 404 error but it was me DIO"))

/* app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })

  app.delete('/user', function (req, res) {
      res.send('Got a DELETE request at /user')
    })

 */

app.listen(port, () => console.log(`Example app listening on port ${port}!`))