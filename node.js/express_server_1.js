const express = require('express')
const app = express()

// app.get('/index.html',(req, res) => {
//     res.writeHead(200, {'content-Type': 'text/html'})
//     res.write('<head><meta charset="utf-8"/></head>')
//     res.end('hello world \n')
// })

app.get('/index.html', (req, res) => {
    res.send('你好！！！')
})

app.listen(3000)
