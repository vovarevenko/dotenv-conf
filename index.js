"use strict";
exports.__esModule = true;
exports.parse = void 0;
var fs_1 = require("fs");
var dotenv_1 = require("dotenv");
function parse(path) {
    if (!fs_1.existsSync(path))
        return {};
    var data;
    data = dotenv_1.parse(fs_1.readFileSync(path));
    if (process.env) {
        Object.entries(data).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            data[key] = process.env[key] || value;
        });
    }
    return data;
}
exports.parse = parse;
