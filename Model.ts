import axios from "axios"
import { ModelInfo } from "./Types/ModelInfo"
import { MODEL_URI } from "./Routes"
import { ModelLoader } from "./Constants/ModelLoader"
import { ModelApiAction } from "./Constants/ModelApiAction"

export type ModelApiRequest = {
  action: ModelApiAction
  model_name?: string
  args?: Partial<ModelApiRequestArgs>
}

type ModelApiRequestArgs = {
  loader: ModelLoader
  bf16: boolean
  load_in_8bit: boolean
  groupsize: number
  wbits: number
  threads: number
  n_batch: number
  no_mmap: boolean
  mlock: boolean
  cache_capacity: null | number
  n_gpu_layers: number
  n_ctx: number
  rwkv_strategy: null | string
  rwkv_cuda_on: boolean
}

export async function modelApi(request: ModelApiRequest): Promise<any> {
  try {
    const response = await axios.post(MODEL_URI, request)
    return response.data
  } catch (error) {
    console.error(error)
    return {}
  }
}

export async function getModelInfo(modelName: string): Promise<ModelInfo> {
  const response = await modelApi({ action: ModelApiAction.info, model_name: modelName })

  return response.result
}

export async function loadModel(modelName: string, loader: ModelLoader): Promise<any> {
  const isAlreadyLoaded = (await getLoadedModel()) === modelName
  if (isAlreadyLoaded) {
    return
  }

  const response = modelApi({
    action: ModelApiAction.load,
    model_name: modelName,
    args: {
      loader: loader,
    },
  })
  return response
}

export function unloadModel(): Promise<any> {
  const response = modelApi({
    action: ModelApiAction.unload,
  })
  return response
}

export async function getModels(): Promise<string[]> {
  const modelsObj: { result: string[] } = await modelApi({ action: ModelApiAction.list })

  return modelsObj.result
}

export async function getLoadedModel(): Promise<string> {
  // only one `get` endpoint is available and it returns current loaded model
  async function modelApiGet() {
    try {
      const response = await axios.get(MODEL_URI)
      return response.data
    } catch (error) {
      console.error(error)
      return {}
    }
  }

  const response = await modelApiGet()
  return response.result
}
