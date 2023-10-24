import { generateCompletion } from "../Generate"
import { Chat } from "../Chat"
import { getLoadedModel, getModelInfo, getModels, loadModel, unloadModel } from "../Model"
import { ModelLoader } from "../Constants/ModelLoader"
import { ConversationHistory } from "../Types/Chat"

// eslint-disable-next-line max-lines-per-function
describe("api", () => {
  const testModelName = "TheBloke_Mistral-7B-Instruct-v0.1-GPTQ"
  const modelLoadDurationMilliseconds = 30000

  // eslint-disable-next-line max-lines-per-function
  describe("generate api", () => {
    /**
     * @longRunning
     */
    it("should follow the prompt", async () => {
      const prompt = "Say 'This is a test'"
      const result = await generateCompletion(prompt)

      console.log(result)
      expect(result).toContain("This is a test")
    }, 5000)

    it("should continue chain of conversation", async () => {
      const charName = "[Base] Assistant"

      const { response, history } = await Chat("Say 'apple' and nothing else", null, {
        character: charName,
        temperature: 0.01,
        max_new_tokens: 20,
      })
      const { response: response2, history: history2 } = await Chat("Can I eat it?", history, {
        character: charName,
        temperature: 0.01,
        max_new_tokens: 20,
      })

      expect(response.toLowerCase()).toContain("apple")
      expect(response2).toMatch(/(yes|of course)/i)
    })

    it("should use character persona in chat mode", async () => {
      const charGreeting = "Hi."
      const historyShared: string[][] = [] // [["", ""]]

      const initialHistory: ConversationHistory = {
        internal: historyShared,
        visible: historyShared,
      }
      const prompt = "What's your name?"
      const charName = "Database Assistant"
      const { response, history } = await Chat(prompt, initialHistory, {
        character: charName,
        greeting: charGreeting,
        temperature: 0.01,
        preset: null,
      })

      console.log(response)
      expect(response.toLowerCase()).toContain("database assistant")
    })
  })

  // eslint-disable-next-line max-lines-per-function
  describe("model api", () => {
    it("should list available models", async () => {
      const result = await getModels()

      console.log(result)
      // expect result to be a list of strings
      expect(result).toEqual(expect.arrayContaining([expect.any(String)]))
    })

    it("should get model info", async () => {
      const modelName = testModelName
      const info = await getModelInfo(modelName)

      console.log(info)

      expect(info).not.toBeUndefined()
    })

    it("should get currently loaded model", async () => {
      const result = await getLoadedModel()
      console.log(result)

      // pass test
      expect(result).not.toBeUndefined()
    })

    /**
     * @longRunning
     */
    it(
      "should load a model",
      async () => {
        const currentlyLoadedModel = await getLoadedModel()
        if (currentlyLoadedModel) {
          await unloadModel()
        }

        const modelName = testModelName
        const result = await loadModel(modelName, ModelLoader.ExLlamav2)

        console.log(result)

        expect(result).not.toBeUndefined()
      },
      modelLoadDurationMilliseconds
    )
  })
})
