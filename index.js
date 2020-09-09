const express = require('express')
let app = express()

app.get('/', (req, res) => {
    res.send('Hello from back-end')
})

app.listen(3000, () => console.log('port 3k, homie'))