/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

        @Module({
            controllers: [MessagesController],
            providers: [MessagesService],
        // eslint-disable-next-line prettier/prettier
        })
        export class MessagesModule {}
