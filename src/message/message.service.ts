import { Injectable } from '@nestjs/common';
import { SaveMessageDTO } from './dto/save-message.dto';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';

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
    this.messageRepo.save(payload);
  }

}
