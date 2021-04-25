import { Socket, OnEvent, ISocket, Autowired } from "odi";
import HistoryService, { Message } from "../services/history.service";

@Socket('chat')
export default class ChatSocket extends ISocket {

    @Autowired()
    history: HistoryService;

    @OnEvent('massage:send') 
    onmessage(message: Message) {
        this.history.addMessage(message);

        this.emit('message:new', message);
    }

}