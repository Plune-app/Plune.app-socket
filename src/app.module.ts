import "dotenv/config";
import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from './chat/entities/user.entity';
import { Chat } from './chat/entities/chat.entity';
import { MessageModule } from './message/message.module';
import { Message } from "./message/entities/message.entity";
@Module({
  imports: [
    ChatModule,
    MessageModule,
    TypeOrmModule.forRoot({
      url:process.env.DB_URL,
      synchronize: true,
      type: "postgres",
      entities: [ User, Chat, Message ]
    }),
  ],
})
export class AppModule {}
