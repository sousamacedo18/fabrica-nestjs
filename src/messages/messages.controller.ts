/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */


import { NotFoundException,Catch } from '@nestjs/common';
import { Controller, Get, Post, Put, Delete, Param,Body } from '@nestjs/common';
import {Message} from './Message'
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
constructor(private messagesService:MessagesService){}

    @Get()
    // eslint-disable-next-line prettier/prettier
    findAll(){
        return this.messagesService.findAll;
    }
   @Get(':id')
    findById(@Param()params){
        return this.messagesService.findById(+params.id).Catch((e)=>{
            throw new NotFoundException(e.message);
            
        })
    }

    @Post()
    create(@Body() message:Message){
      
    return this.messagesService.create(message)
    }

    @Put(':id')
    update(@Param()params,@Body() message:Message){
        return this.messagesService.update( +params.id, message)
    }
    @Delete(':id')
    delete(@Param() params){
        return this.messagesService.delete(+params.id)
    }

    
}
