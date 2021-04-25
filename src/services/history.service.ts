import { Service } from "odi";

export interface Message {
    username: string;
    text: string
}

@Service()
export default class HistoryService {
    private store: Message[] = [];
    
    getMessages() {
        return this.store;
    }

    addMessage(message: Message) {
        if(this.store.length > 10)
            this.store.pop();

        this.store.push(message);
    }

}