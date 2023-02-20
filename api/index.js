const express = require('express');
const VM = require('vm2');
const cors = require('cors');
const app = express();
app.use(cors(), express.json());
const port = 3000;

app.get('/favicon.ico', (req, res) => res.status(204));
app.options('*', cors());
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
    res.status(200);
});

app.post('/run-code', cors(), (req, res) => {
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