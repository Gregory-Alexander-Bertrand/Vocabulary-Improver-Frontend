const express = require('express')
const app = express()
const routesReport = require('rowdy-logger').begin(app)
const path = require('path')
const replaceInFile = require('replace-in-file')

app.get('/', (req, res) => {
    const filepath = path.join(__dirname, 'index.html')
    res.sendFile(filepath)
  })
  
  app.get('/app.js', async (req, res) => {
    const filepath = path.join(__dirname, 'app.js')

    if (process.env.NODE_ENV === 'production') {
    await replaceInFile({
      files: filepath,
      from: 'http://localhost:3001',
      to: 'https://vocab-backend-app.herokuapp.com'
    })
   
  }
  res.sendFile(filepath)
})
  
  app.get('/style.css', (req, res) => {
    const filepath = path.join(__dirname, 'style.css')
    res.type('css').sendFile(filepath)
  })
  
  const port = process.env.PORT || 3000
  app.listen(port, () => {
      routesReport.print()
  })