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
exports.getLoadedModel = exports.getModels = exports.unloadModel = exports.loadModel = exports.getModelInfo = exports.modelApi = void 0;
const axios_1 = __importDefault(require("axios"));
const Routes_1 = require("./Routes");
const ModelApiAction_1 = require("./Constants/ModelApiAction");
function modelApi(request) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(Routes_1.MODEL_URI, request);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return {};
        }
    });
}
exports.modelApi = modelApi;
function getModelInfo(modelName) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield modelApi({ action: ModelApiAction_1.ModelApiAction.info, model_name: modelName });
        return response.result;
    });
}
exports.getModelInfo = getModelInfo;
function loadModel(modelName, loader) {
    return __awaiter(this, void 0, void 0, function* () {
        const isAlreadyLoaded = (yield getLoadedModel()) === modelName;
        if (isAlreadyLoaded) {
            return;
        }
        const response = modelApi({
            action: ModelApiAction_1.ModelApiAction.load,
            model_name: modelName,
            args: {
                loader: loader,
            },
        });
        return response;
    });
}
exports.loadModel = loadModel;
function unloadModel() {
    const response = modelApi({
        action: ModelApiAction_1.ModelApiAction.unload,
    });
    return response;
}
exports.unloadModel = unloadModel;
function getModels() {
    return __awaiter(this, void 0, void 0, function* () {
        const modelsObj = yield modelApi({ action: ModelApiAction_1.ModelApiAction.list });
        return modelsObj.result;
    });
}
exports.getModels = getModels;
function getLoadedModel() {
    return __awaiter(this, void 0, void 0, function* () {
        // only one `get` endpoint is available and it returns current loaded model
        function modelApiGet() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield axios_1.default.get(Routes_1.MODEL_URI);
                    return response.data;
                }
                catch (error) {
                    console.error(error);
                    return {};
                }
            });
        }
        const response = yield modelApiGet();
        return response.result;
    });
}
exports.getLoadedModel = getLoadedModel;
