"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TextField_1 = require("./TextField");
const App = () => {
    return (<div>
      <TextField_1.TextField text="something"/>
    </div>);
};
exports.default = App;
