const express = require('express');
const cors = require('cors');
const executeCode = require('./services/execCode/executeCode');

const app = express()
app.use(cors(), express.json());
const port = 3000

executeCode(app);

app.get('/', (req, res) => {
    res.send('Codelearn server is running.');
    res.status(200);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});