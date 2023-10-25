"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Generate_1 = require("./Generate");
const Model_1 = require("./Model");
const ModelLoader_1 = require("./Constants/ModelLoader");
const modelName = "TheBloke_Mistral-7B-Instruct-v0.1-GPTQ";
const prompt = "Tell us about yourself.";
(0, Model_1.loadModel)(modelName, ModelLoader_1.ModelLoader.ExLlamav2).then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Model loaded");
    const result = yield (0, Generate_1.generateCompletion)(prompt, {
        temperature: 0.5,
    });
    console.log(result);
}));
