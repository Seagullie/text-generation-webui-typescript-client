"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERATE_URI = exports.MODEL_URI = exports.CHAT_URI = void 0;
const PORT = 5000;
const HOST = `localhost:${PORT}`;
// endpoint URIs
exports.CHAT_URI = `http://${HOST}/api/v1/chat`;
exports.MODEL_URI = `http://${HOST}/api/v1/model`;
exports.GENERATE_URI = `http://${HOST}/api/v1/generate`;
