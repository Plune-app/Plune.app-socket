import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Message } from "src/message/entities/message.entity";

@Entity({ name : "chat" })
export class Chat {

  @PrimaryColumn({ name: "roomId", type: "text" })
  roomId: number;

  @ManyToMany(() => User, (user) => user.chats)
  users: User[]

  @OneToMany(() => Message, (msg) => msg.chat)
  messages: Message[];

  // @ManyToOne(() => Organization, (org) => org.chats)
  // @JoinColumn({ name: "organizationId" })
  // organization: Organization
}
