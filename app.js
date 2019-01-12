const express = require('express'),
    path = require('path'),
    port = 3100,
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();
    axios = require('axios'),
    router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
});

app.use(router)
router.get('/', (req, res, next) => {
    res.send('<a href="https://oauth.vk.com/authorize?client_id=6814926&display=page&redirect_uri=http://95.179.152.129/&scope=friends&response_type=code&v=5.92">Click me</a>');
});

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('server started on ' + port);
});
module.exports = app;