"use strict";
exports.__esModule = true;
exports.parse = void 0;
var fs_1 = require("fs");
var dotenv_1 = require("dotenv");
function parse(path) {
    return fs_1.existsSync(path) ? dotenv_1.parse(fs_1.readFileSync(path)) : {};
}
exports.parse = parse;
