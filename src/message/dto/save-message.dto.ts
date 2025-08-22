export class SaveMessageDTO {
  message: string;
  userId: number;
  roomId: string
  messageId?: string;
  sentAt?: Date;
  organizationId: number;
}