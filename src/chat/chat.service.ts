import { Injectable } from '@nestjs/common';
import { SaveChatDto } from './dto/save-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Repository } from 'typeorm';
import { Message } from '../message/entities/message.entity';

@Injectable()
export class ChatService {

  create(createChatDto: SaveChatDto) {

  }


  findAll() {
    return `This action returns all chat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
