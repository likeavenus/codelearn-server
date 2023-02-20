const VM = require('vm2');

function executeCode(app) {
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
}

module.exports = executeCode;