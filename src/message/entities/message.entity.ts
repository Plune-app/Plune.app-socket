import { Chat } from "src/chat/entities/chat.entity";
import { User } from "src/chat/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Organization } from "./organization.entity";

@Entity({ name: "message" })
export class Message {
  // generated inside frontend to get more performance
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "messageId", type: "text", nullable: true })
  messageId?: string;

  @Column({ name: "content", type: "text" })
  content: string;

  @Column({ name: "roomId", type: "text" })
  roomId: string;

  @Column({ name: "sentAt", type: "text" })
  sentAt: Date;

  @Column({ name: "read", type: "boolean", default: false })
  read: boolean;

  @ManyToOne(() => User, (user) => user.messages)
  @JoinColumn({ name: "userId" })
  user: User;

  @ManyToOne(() => Chat, (chat) => chat.messages)
  @JoinColumn({ name: "chatId" })
  chat: Chat;

  @ManyToOne(() => Organization)
  organization : Organization;
}