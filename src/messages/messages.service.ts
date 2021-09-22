/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import {Message} from './Message';


@Injectable()
export class MessagesService {

    private  messages:Message[]=[
        {
            id:1,
            text:'primeira mensagem',
        },
        {
            id:2,
            text:'segunda linha mensagem',
        },
    ];

    findAll(){
        return this.messages
    }
    findById(id:number) {
        const  message= this.messages.find((mesg:Message)=>mesg.id===id);
        if(!message){
                throw new Error(`Mensagem com ID ${id} não encontrado`);
                
        }

        return message;
    }
    create(message:Message){
       return this.messages.push(message)
    }
    
    update(id:number,message:Message){
      const index = this.messages.findIndex((message:Message)=>message.id===id);
      this.messages[index] = message;
      return message;
    }
    delete(id: number) {
        const index = this.messages.findIndex((message:Message)=>message.id===id);
        delete this.messages[index];
        return true;
    }
}



