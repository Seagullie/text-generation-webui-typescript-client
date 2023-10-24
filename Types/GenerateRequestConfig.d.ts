/**
 * Configuration options for making a request to a text generation model.
 */
export type GenerateRequestConfig = {
  /** The prompt for text generation. */
  prompt: string

  /** The maximum number of new tokens to generate. */
  max_new_tokens: number

  /** Whether to automatically calculate the maximum new tokens. */
  auto_max_new_tokens: boolean

  /** The maximum number of tokens per second for generation. */
  max_tokens_second: number

  /** The preset for text generation. */
  preset: string

  /** Whether to use a sampling method during generation. */
  do_sample: boolean

  /** The temperature for controlling randomness during sampling. */
  temperature: number

  /** The top-p probability for sampling. */
  top_p: number

  /** The typical-p probability for sampling. */
  typical_p: number

  /** The epsilon cutoff in units of 1e-4. */
  epsilon_cutoff: number

  /** The eta cutoff in units of 1e-4. */
  eta_cutoff: number

  /** The tfs (token frequency scaling) value. */
  tfs: number

  /** The top-k value for sampling. */
  top_k: number

  /** The repetition penalty for generated text. */
  repetition_penalty: number

  /** The range for the repetition penalty. */
  repetition_penalty_range: number

  /** The minimum length for generated text. */
  min_length: number

  /** The n-gram size to avoid repeating in generated text. */
  no_repeat_ngram_size: number

  /** The number of beams for generation. */
  num_beams: number

  /** The penalty alpha for length in generation. */
  penalty_alpha: number

  /** The length penalty for generated text. */
  length_penalty: number

  /** Whether to enable early stopping during generation. */
  early_stopping: boolean

  /** The mirostat mode for text generation. */
  mirostat_mode: number

  /** The mirostat tau value for text generation. */
  mirostat_tau: number

  /** The mirostat eta value for text generation. */
  mirostat_eta: number

  /** The grammar string for controlling text generation. */
  grammar_string: string

  /** The scale for guidance in text generation. */
  guidance_scale: number

  /** The negative prompt for text generation. */
  negative_prompt: string

  /** The random seed for text generation. */
  seed: number

  /** Whether to add a beginning-of-sequence token. */
  add_bos_token: boolean

  /** The truncation length for generated text. */
  truncation_length: number

  /** Whether to ban the end-of-sequence token. */
  ban_eos_token: boolean

  /** Custom token bans for text generation. */
  custom_token_bans: string

  /** Whether to skip special tokens in generated text. */
  skip_special_tokens: boolean

  /** List of stopping strings for ending text generation. */
  stopping_strings: string[]
}
