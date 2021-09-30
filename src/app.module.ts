import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [MessagesModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
