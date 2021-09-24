"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
let MessagesService = class MessagesService {
    constructor() {
        this.messages = [
            {
                id: 1,
                text: 'primeira mensagem',
            },
            {
                id: 2,
                text: 'segunda linha mensagem',
            },
        ];
    }
    findAll() {
        return this.messages;
    }
    findById(id) {
        const message = this.messages.find((mesg) => mesg.id === id);
        if (!message) {
            throw new Error(`Mensagem com ID ${id} não encontrado`);
        }
        return message;
    }
    create(message) {
        return this.messages.push(message);
    }
    update(id, message) {
        const index = this.messages.findIndex((message) => message.id === id);
        this.messages[index] = message;
        return message;
    }
    delete(id) {
        const index = this.messages.findIndex((message) => message.id === id);
        delete this.messages[index];
        return true;
    }
};
MessagesService = __decorate([
    (0, common_1.Injectable)()
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map