import { generateCompletion } from "./Generate"
import { loadModel } from "./Model"
import { ModelLoader } from "./Constants/ModelLoader"

const modelName = "TheBloke_Mistral-7B-Instruct-v0.1-GPTQ"
const prompt = "Tell us about yourself."

loadModel(modelName, ModelLoader.ExLlamav2).then(async () => {
  console.log("Model loaded")

  const result = await generateCompletion(prompt, {
    temperature: 0.5,
  })
  console.log(result)
})
