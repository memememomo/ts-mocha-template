"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const $ = __importStar(require("jquery"));
var person = new Person_1.Person(1, "yoko");
$(() => {
    $('body').html('彼は' + person.name + 'です。');
});
//# sourceMappingURL=main.js.map