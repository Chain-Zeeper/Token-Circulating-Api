"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tokens_json_1 = __importDefault(require("../tokens.json"));
const app = (0, express_1.default)();
const port = 8080;
app.get('/', (req, res) => {
    res.send('Hello, TypeScript Express!');
});
// get circulating supply
app.get('/:ticker/circulating', () => {
    console.log(tokens_json_1.default);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
