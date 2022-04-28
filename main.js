"use strict";
exports.__esModule = true;
var functionOne_1 = require("./functionOne");
var functionTwo_1 = require("./functionTwo");
var elseStatement_1 = require("./elseStatement");
var num = 2;
if ((num = 1)) {
    (0, functionOne_1.functionOne)();
}
if ((num = 2)) {
    (0, functionTwo_1.functionTwo)();
}
else {
    (0, elseStatement_1.elseStatement)();
}
