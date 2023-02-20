"use strict";
exports.__esModule = true;
exports.executeCode = void 0;
var vm2_1 = require("vm2");
function executeCode(app) {
    app.post('/run-code', function (req, res) {
        var body = req.body;
        var vm = new vm2_1.VM({
            wasm: true
        });
        try {
            if (!body.code)
                return;
            var result = vm.run(body.code);
            if (result) {
                res.status(200).json(result);
            }
        }
        catch (e) {
            res.status(500).json(e.message);
        }
    });
}
exports.executeCode = executeCode;
