import { Injectable } from '@nestjs/common';
import { SaveMessageDTO } from './dto/save-message.dto';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/chat/entities/user.entity';
import { Chat } from 'src/chat/entities/chat.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepo: Repository<Message>
  ) { }

  saveMessage(payload: SaveMessageDTO) {
    if (payload.messageId) {
      this.messageRepo
        .findOne({ where: { messageId: payload.messageId } })
        .then(res => {
          if (res) {
            Object.assign(res, payload);
            this.messageRepo.save(res);
            return 1;
          }
          // throw new 
        })
    }
    const message = new Message();
    Object.assign(message, payload);
    message.user = { id  : payload.userId } as User;
    message.chat = { roomId : payload.roomId } as Chat;
    
    this.messageRepo.save(message);
  }

}
