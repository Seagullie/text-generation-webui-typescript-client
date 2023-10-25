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
const Generate_1 = require("../Generate");
const Chat_1 = require("../Chat");
const Model_1 = require("../Model");
const ModelLoader_1 = require("../Constants/ModelLoader");
// eslint-disable-next-line max-lines-per-function
describe("api", () => {
    const testModelName = "TheBloke_Mistral-7B-Instruct-v0.1-GPTQ";
    const modelLoadDurationMilliseconds = 30000;
    // eslint-disable-next-line max-lines-per-function
    describe("generate api", () => {
        /**
         * @longRunning
         */
        it("should follow the prompt", () => __awaiter(void 0, void 0, void 0, function* () {
            const prompt = "Say 'This is a test'";
            const result = yield (0, Generate_1.generateCompletion)(prompt);
            console.log(result);
            expect(result).toContain("This is a test");
        }), 5000);
        it("should continue chain of conversation", () => __awaiter(void 0, void 0, void 0, function* () {
            const charName = "[Base] Assistant";
            const { response, history } = yield (0, Chat_1.Chat)("Say 'apple' and nothing else", null, {
                character: charName,
                temperature: 0.01,
                max_new_tokens: 20,
            });
            const { response: response2, history: history2 } = yield (0, Chat_1.Chat)("Can I eat it?", history, {
                character: charName,
                temperature: 0.01,
                max_new_tokens: 20,
            });
            expect(response.toLowerCase()).toContain("apple");
            expect(response2).toMatch(/(yes|of course)/i);
        }));
        it("should use character persona in chat mode", () => __awaiter(void 0, void 0, void 0, function* () {
            const charGreeting = "Hi.";
            const historyShared = []; // [["", ""]]
            const initialHistory = {
                internal: historyShared,
                visible: historyShared,
            };
            const prompt = "What's your name?";
            const charName = "Database Assistant";
            const { response, history } = yield (0, Chat_1.Chat)(prompt, initialHistory, {
                character: charName,
                greeting: charGreeting,
                temperature: 0.01,
                preset: null,
            });
            console.log(response);
            expect(response.toLowerCase()).toContain("database assistant");
        }));
    });
    // eslint-disable-next-line max-lines-per-function
    describe("model api", () => {
        it("should list available models", () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield (0, Model_1.getModels)();
            console.log(result);
            // expect result to be a list of strings
            expect(result).toEqual(expect.arrayContaining([expect.any(String)]));
        }));
        it("should get model info", () => __awaiter(void 0, void 0, void 0, function* () {
            const modelName = testModelName;
            const info = yield (0, Model_1.getModelInfo)(modelName);
            console.log(info);
            expect(info).not.toBeUndefined();
        }));
        it("should get currently loaded model", () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield (0, Model_1.getLoadedModel)();
            console.log(result);
            // pass test
            expect(result).not.toBeUndefined();
        }));
        /**
         * @longRunning
         */
        it("should load a model", () => __awaiter(void 0, void 0, void 0, function* () {
            const currentlyLoadedModel = yield (0, Model_1.getLoadedModel)();
            if (currentlyLoadedModel) {
                yield (0, Model_1.unloadModel)();
            }
            const modelName = testModelName;
            const result = yield (0, Model_1.loadModel)(modelName, ModelLoader_1.ModelLoader.ExLlamav2);
            console.log(result);
            expect(result).not.toBeUndefined();
        }), modelLoadDurationMilliseconds);
    });
});
