const express = require('express');
const VM = require('vm2');
const allowCors = require('../allowCors');
// const cors = require('cors');
// const corsOptions = {
//     origin: '*',
//     credentials: true,
//     optionSuccessStatus: 200,
// }
allowCors();
const app = express()
// app.use(cors(corsOptions), express.json());
app.use(express.json());
const port = 3000

app.get('/favicon.ico', (req, res) => res.status(204));
app.get('/', (req, res) => {
    res.send('Codelearn server is running.');
    res.status(200);
});

app.post('/run-code', (req, res) => {
    const { body } = req;
    const vm = new VM({
        wasm: true,
    });
    try {
        if (!body.code) return;
        const result = vm.run(body.code);
        if (result) {
            res.status(200).json(result);
        }

    } catch (e) {
        res.status(500).json(e.message);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});