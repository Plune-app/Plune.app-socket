import { PartialType } from '@nestjs/mapped-types';
import { SaveChatDto } from './save-chat.dto';

export class UpdateChatDto extends PartialType(SaveChatDto) {
  id: number;
}
