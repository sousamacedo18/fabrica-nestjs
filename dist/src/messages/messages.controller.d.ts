import { Message } from './Message';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    private messagesService;
    constructor(messagesService: MessagesService);
    findAll(): () => Message[];
    findById(params: any): any;
    create(message: Message): number;
    update(params: any, message: Message): Message;
    delete(params: any): boolean;
}
