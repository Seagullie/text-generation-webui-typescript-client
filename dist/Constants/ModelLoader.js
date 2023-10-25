"use strict";
// referenced from modules\loaders.py of text-generation-webui
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelLoader = void 0;
var ModelLoader;
(function (ModelLoader) {
    ModelLoader["Transformers"] = "Transformers";
    ModelLoader["ExLlama_HF"] = "ExLlama_HF";
    ModelLoader["ExLlamav2_HF"] = "ExLlamav2_HF";
    ModelLoader["ExLlama"] = "ExLlama";
    ModelLoader["ExLlamav2"] = "ExLlamav2";
    ModelLoader["AutoGPTQ"] = "AutoGPTQ";
    ModelLoader["GPTQ_for_LLaMa"] = "GPTQ-for-LLaMa";
    ModelLoader["llama_cpp"] = "llama.cpp";
    ModelLoader["llamacpp_HF"] = "llamacpp_HF";
    ModelLoader["ctransformers"] = "ctransformers";
    ModelLoader["AutoAWQ"] = "AutoAWQ";
})(ModelLoader || (exports.ModelLoader = ModelLoader = {}));
