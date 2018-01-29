const express = require('express');
const app = express();

app.get('/index.html/:id/:name', (req, res) => {
    let str = '';
    for(let key in req.params) {
        if(str != '') {
            str += '<br/>'
        }
        str += `参数名：${key}`;
        str += `${String.fromCharCode(9)} 参数值：${req.params[key]}`;
    }
    res.send(str);
})
app.listen(3000);