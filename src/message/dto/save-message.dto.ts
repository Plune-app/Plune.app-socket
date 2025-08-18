export class SaveMessageDTO {
  message: string;
  userId: number;
  roomId: number
  messageId?: string;
  sentAt?: Date;
}