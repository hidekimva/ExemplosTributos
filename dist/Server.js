"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var index_1 = __importDefault(require("./Routes/index"));
//app.use(cors());
app.use(express.json());
app.use(index_1.default);
app.listen(process.env.PORT || 3333, function () {
    console.log('🚀 Server started on port 3333!');
});
