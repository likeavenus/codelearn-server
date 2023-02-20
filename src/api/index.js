const express = require('express');
const cors = require('cors');
const executeCode = require('../services/execCode/executeCode');

const app = express()
app.use(cors(), express.json());
const port = 3000

executeCode(app);

app.get('/favicon.ico', (req, res) => res.status(204));
app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    res.send('Codelearn server is running.');
    res.status(200);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});