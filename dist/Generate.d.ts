import { GenerateRequestConfig } from "./Types/GenerateRequestConfig";
export declare function generateCompletion(prompt: string, requestConfig?: Partial<GenerateRequestConfig>): Promise<string | false>;
