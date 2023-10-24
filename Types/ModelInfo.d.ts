type SharedSettings = {
  dark_theme: boolean
  show_controls: boolean
  start_with: string
  mode: string
  chat_style: string
  "prompt-default": string
  "prompt-notebook": string
  preset: string
  max_new_tokens: number
  max_new_tokens_min: number
  max_new_tokens_max: number
  seed: number
  negative_prompt: string
  truncation_length: number
  truncation_length_min: number
  truncation_length_max: number
  custom_stopping_strings: string
  auto_max_new_tokens: boolean
  max_tokens_second: number
  ban_eos_token: boolean
  custom_token_bans: string
  add_bos_token: boolean
  skip_special_tokens: boolean
  stream: boolean
  name1: string
  character: string
  instruction_template: string
  "chat-instruct_command": string
  autoload_model: boolean
  default_extensions: string[]
}

type SharedArgs = {
  notebook: boolean
  chat: boolean
  multi_user: boolean
  character: null | string
  model: null | string
  lora: null | string
  model_dir: string
  lora_dir: string
  model_menu: boolean
  no_stream: boolean
  settings: null
  extensions: string[]
  verbose: boolean
  chat_buttons: boolean
  loader: null
  cpu: boolean
  auto_devices: boolean
  gpu_memory: null
  cpu_memory: null
  disk: boolean
  disk_cache_dir: string
  load_in_8bit: boolean
  bf16: boolean
  no_cache: boolean
  xformers: boolean
  sdp_attention: boolean
  trust_remote_code: boolean
  use_fast: boolean
  load_in_4bit: boolean
  compute_dtype: string
  quant_type: string
  use_double_quant: boolean
  threads: number
  threads_batch: number
  n_batch: number
  no_mmap: boolean
  mlock: boolean
  mul_mat_q: boolean
  cache_capacity: null
  n_gpu_layers: number
  tensor_split: null
  n_ctx: number
  llama_cpp_seed: number
  numa: boolean
  wbits: number
  model_type: null
  groupsize: number
  pre_layer: null
  checkpoint: null
  monkey_patch: boolean
  triton: boolean
  no_inject_fused_attention: boolean
  no_inject_fused_mlp: boolean
  no_use_cuda_fp16: boolean
  desc_act: boolean
  disable_exllama: boolean
  gpu_split: null
  max_seq_len: number
  cfg_cache: boolean
  deepspeed: boolean
  nvme_offload_dir: null
  local_rank: number
  rwkv_strategy: null
  rwkv_cuda_on: boolean
  alpha_value: number
  rope_freq_base: number
  compress_pos_emb: number
  listen: boolean
  listen_host: null | string
  listen_port: null | number
  share: boolean
  auto_launch: boolean
  gradio_auth: null
  gradio_auth_path: null
  ssl_keyfile: null
  ssl_certfile: null
  api: boolean
  api_blocking_port: number
  api_streaming_port: number
  public_api: boolean
  public_api_id: null
  multimodal_pipeline: null
}

export type ModelInfo = {
  model_name: string
  lora_names: string[]
  "shared.settings": SharedSettings
  "shared.args": SharedArgs
}
