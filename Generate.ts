import axios from "axios"
import { GenerateRequestConfig } from "./Types/GenerateRequestConfig"
import { GENERATE_URI } from "./Routes"

const defaultRequest: GenerateRequestConfig = {
  prompt: "",
  max_new_tokens: 250,
  auto_max_new_tokens: false,
  max_tokens_second: 0,
  preset: "None",
  do_sample: true,
  temperature: 0.7,
  top_p: 0.1,
  typical_p: 1,
  epsilon_cutoff: 0, // In units of 1e-4
  eta_cutoff: 0, // In units of 1e-4
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
}

// eslint-disable-next-line max-lines-per-function
export async function generateCompletion(
  prompt: string,
  requestConfig?: Partial<GenerateRequestConfig>
): Promise<string | false> {
  const request: Partial<GenerateRequestConfig> = requestConfig ?? defaultRequest
  request.prompt = prompt

  try {
    const response = await axios.post(GENERATE_URI, request)

    if (response.status === 200) {
      const result = response.data.results[0].text

      return result
    }
    return false
  } catch (error) {
    console.error(error)
    return false
  }
}
