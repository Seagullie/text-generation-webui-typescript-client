// using this example for reference: https://github.com/oobabooga/text-generation-webui/blob/main/api-examples/api-example-chat.py

import axios from "axios"
import _ from "lodash"
import { ChatRequestConfig } from "./Types/Chat"
import { ConversationHistory } from "./Types/Chat"
import { ChatMode } from "./Types/Chat"
import { CHAT_URI } from "./Routes"

function getEmptyHistory(): ConversationHistory {
  return {
    internal: [],
    visible: [],
  }
}

// <|BEGIN-VISIBLE-CHAT|>

// eslint-disable-next-line max-lines-per-function
export async function Chat(
  userInput: string,
  history: ConversationHistory | null,
  requestConfig?: Partial<ChatRequestConfig>
): Promise<{ response: string; history: ConversationHistory }> {
  if (history === null) {
    history = getEmptyHistory()
  }

  const request: Partial<ChatRequestConfig> = {
    user_input: userInput,
    max_new_tokens: 200,
    auto_max_new_tokens: false,
    max_tokens_second: 0,
    history: history,
    mode: ChatMode.ChatInstruct, // Valid options: 'chat', 'chat-instruct', 'instruct'
    // 'name1': 'name of user', // Optional
    // 'name2': 'name of character', // Optional
    // 'context': 'character context', // Optional
    // 'greeting': 'greeting', // Optional
    // 'name1_instruct': 'You', // Optional
    // 'name2_instruct': 'Assistant', // Optional
    // 'context_instruct': 'context_instruct', // Optional
    // 'turn_template': 'turn_template', // Optional
    regenerate: false,
    _continue: false,

    // preset: "simple-1",

    ...requestConfig,
  }

  try {
    const axiosResponse = await axios.post(CHAT_URI, request)

    if (axiosResponse.status === 200) {
      const history: ConversationHistory = axiosResponse.data.results[0].history
      const LLMResponse = _.last(history.visible)[1]

      console.log(JSON.stringify(history, null, 4))

      const result = { response: LLMResponse, history }
      return result
    } else {
      console.error("Request failed with status code: " + axiosResponse.status)
    }
  } catch (error) {
    console.error("An error occurred:", error)
  }
}
