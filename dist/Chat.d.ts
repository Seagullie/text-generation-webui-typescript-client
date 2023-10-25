import { ChatRequestConfig } from "./Types/Chat";
import { ConversationHistory } from "./Types/Chat";
export declare function Chat(userInput: string, history: ConversationHistory | null, requestConfig?: Partial<ChatRequestConfig>): Promise<{
    response: string;
    history: ConversationHistory;
}>;
