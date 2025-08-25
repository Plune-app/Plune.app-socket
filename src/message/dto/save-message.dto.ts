export class SaveMessageDTO {
  content: string;
  userId: number;
  roomId: string
  messageId?: string;
  sentAt?: Date;
  organizationId: number;
  clientTime: string;
}