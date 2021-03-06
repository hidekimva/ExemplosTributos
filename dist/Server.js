"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var index_1 = __importDefault(require("./Routes/index"));
var cors_1 = __importDefault(require("cors"));
app.use(cors_1.default());
app.use(express.json());
app.use(index_1.default);
var porta = process.env.PORT;
app.listen(porta || 3333, function () {
    if (porta != '3333') {
        console.log('🚀 Server started on port ' + porta + '!');
    }
    else {
        console.log('🚀 Server started on port 3333!');
    }
});
