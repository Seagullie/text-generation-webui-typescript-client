export type ChatRequestConfig = {
  user_input: string
  max_new_tokens: number
  auto_max_new_tokens: boolean
  max_tokens_second: number
  history: ConversationHistory
  mode: ChatMode
  character: string
  instruction_template: string
  your_name: string
  name1?: string
  name2?: string
  context?: string
  greeting?: string
  name1_instruct?: string
  name2_instruct?: string
  context_instruct?: string
  turn_template?: string
  regenerate: boolean
  _continue: boolean
  chat_instruct_command: string
  preset: null | string
  do_sample: boolean
  temperature: number
  top_p: number
  typical_p: number
  epsilon_cutoff: number
  eta_cutoff: number
  tfs: number
  top_a: number
  repetition_penalty: number
  repetition_penalty_range: number
  top_k: number
  min_length: number
  no_repeat_ngram_size: number
  num_beams: number
  penalty_alpha: number
  length_penalty: number
  early_stopping: boolean
  mirostat_mode: number
  mirostat_tau: number
  mirostat_eta: number
  grammar_string: string
  guidance_scale: number
  negative_prompt: string
  seed: number
  add_bos_token: boolean
  truncation_length: number
  ban_eos_token: boolean
  custom_token_bans: string
  skip_special_tokens: boolean
  stopping_strings: string[]
}

export type ConversationHistory = {
  internal: string[][]
  visible: string[][]
}
export const enum ChatMode {
  Chat = "chat",
  ChatInstruct = "chat-instruct",
  Instruct = "instruct",
}
