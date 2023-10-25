"use strict";
// using this example for reference: https://github.com/oobabooga/text-generation-webui/blob/main/api-examples/api-example-chat.py
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
const Routes_1 = require("./Routes");
function getEmptyHistory() {
    return {
        internal: [],
        visible: [],
    };
}
// <|BEGIN-VISIBLE-CHAT|>
// eslint-disable-next-line max-lines-per-function
function Chat(userInput, history, requestConfig) {
    return __awaiter(this, void 0, void 0, function* () {
        if (history === null) {
            history = getEmptyHistory();
        }
        const request = Object.assign({ user_input: userInput, max_new_tokens: 200, auto_max_new_tokens: false, max_tokens_second: 0, history: history, mode: "chat-instruct" /* ChatMode.ChatInstruct */, 
            // 'name1': 'name of user', // Optional
            // 'name2': 'name of character', // Optional
            // 'context': 'character context', // Optional
            // 'greeting': 'greeting', // Optional
            // 'name1_instruct': 'You', // Optional
            // 'name2_instruct': 'Assistant', // Optional
            // 'context_instruct': 'context_instruct', // Optional
            // 'turn_template': 'turn_template', // Optional
            regenerate: false, _continue: false }, requestConfig);
        try {
            const axiosResponse = yield axios_1.default.post(Routes_1.CHAT_URI, request);
            if (axiosResponse.status === 200) {
                const history = axiosResponse.data.results[0].history;
                const LLMResponse = lodash_1.default.last(history.visible)[1];
                console.log(JSON.stringify(history, null, 4));
                const result = { response: LLMResponse, history };
                return result;
            }
            else {
                console.error("Request failed with status code: " + axiosResponse.status);
            }
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
    });
}
exports.Chat = Chat;
