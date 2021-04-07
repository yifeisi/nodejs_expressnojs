const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port =process.env.PORT || 3000;
const apiPath= '/api/';


app.use(express.static('client'));
//routers
app.use(apiPath +'users',require('./routes/users.route'))
app.get('/', function (req, res) {
   res.send('Hello World');
})
app.get('/test', function (req, res) {
    res.send('ban dang trong trang test');
 })
 app.get('/users', function (req, res) {
    res.send({name: 'Huy'});
 })

app.listen(port, function () {
    const host ='localhost'; //server.address().address
   console.log("Example app listening at http://%s:%s", host, port)
})