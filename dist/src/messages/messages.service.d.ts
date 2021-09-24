import { Message } from './Message';
export declare class MessagesService {
    private messages;
    findAll(): Message[];
    findById(id: number): Message;
    create(message: Message): number;
    update(id: number, message: Message): Message;
    delete(id: number): boolean;
}
