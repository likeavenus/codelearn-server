"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var executeCode_1 = require("./services/execCode/executeCode");
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])(), express_1["default"].json());
var port = 3000;
(0, executeCode_1.executeCode)(app);
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
