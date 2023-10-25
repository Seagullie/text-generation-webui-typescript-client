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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCompletion = void 0;
const axios_1 = __importDefault(require("axios"));
const Routes_1 = require("./Routes");
const defaultRequest = {
    prompt: "",
    max_new_tokens: 250,
    auto_max_new_tokens: false,
    max_tokens_second: 0,
    preset: "None",
    do_sample: true,
    temperature: 0.7,
    top_p: 0.1,
    typical_p: 1,
    epsilon_cutoff: 0,
    eta_cutoff: 0,
    tfs: 1,
    // top_a: 0,
    repetition_penalty: 1.18,
    repetition_penalty_range: 0,
    top_k: 40,
    min_length: 0,
    no_repeat_ngram_size: 0,
    num_beams: 1,
    penalty_alpha: 0,
    length_penalty: 1,
    early_stopping: false,
    mirostat_mode: 0,
    mirostat_tau: 5,
    mirostat_eta: 0.1,
    grammar_string: "",
    guidance_scale: 1,
    negative_prompt: "",
    seed: -1,
    add_bos_token: true,
    truncation_length: 2048,
    ban_eos_token: false,
    custom_token_bans: "",
    skip_special_tokens: true,
    stopping_strings: [],
};
// eslint-disable-next-line max-lines-per-function
function generateCompletion(prompt, requestConfig) {
    return __awaiter(this, void 0, void 0, function* () {
        const request = requestConfig !== null && requestConfig !== void 0 ? requestConfig : defaultRequest;
        request.prompt = prompt;
        try {
            const response = yield axios_1.default.post(Routes_1.GENERATE_URI, request);
            if (response.status === 200) {
                const result = response.data.results[0].text;
                return result;
            }
            return false;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    });
}
exports.generateCompletion = generateCompletion;
