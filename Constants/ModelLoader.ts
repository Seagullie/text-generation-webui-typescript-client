// referenced from modules\loaders.py of text-generation-webui

export enum ModelLoader {
  Transformers = "Transformers",
  ExLlama_HF = "ExLlama_HF",
  ExLlamav2_HF = "ExLlamav2_HF",
  ExLlama = "ExLlama",
  ExLlamav2 = "ExLlamav2",
  AutoGPTQ = "AutoGPTQ",
  GPTQ_for_LLaMa = "GPTQ-for-LLaMa",
  llama_cpp = "llama.cpp",
  llamacpp_HF = "llamacpp_HF",
  ctransformers = "ctransformers",
  AutoAWQ = "AutoAWQ",
}
