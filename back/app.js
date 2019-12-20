const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.status(200).json({api: 'version 1'})
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('server started on port', port))